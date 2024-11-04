import { createAgent, IDIDManager, IResolver, IDataStore, IKeyManager, ICredentialPlugin } from "@veramo/core"
import { DIDManager } from "@veramo/did-manager"
import { EthrDIDProvider } from "@veramo/did-provider-ethr"
import { WebDIDProvider } from "@veramo/did-provider-web"
import { KeyDIDProvider } from "@veramo/did-provider-key"
import { KeyManager } from "@veramo/key-manager"
import { KeyManagementSystem, SecretBox } from "@veramo/kms-local"
import { CredentialPlugin } from "@veramo/credential-w3c"
import { DIDResolverPlugin } from "@veramo/did-resolver"
import { Resolver } from "did-resolver"
import { getResolver as ethrDidResolver } from "ethr-did-resolver"
import { getResolver as webDidResolver } from "web-did-resolver"
import { Entities, KeyStore, DIDStore, IDataStoreORM, PrivateKeyStore, migrations } from "@veramo/data-store"
import { DataSource } from "typeorm"

// This will be the name for the local sqlite database for demo purposes
const DATABASE_FILE = "database.sqlite"

// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = "3586660d179141e3801c3895de1c2eba"

// This will be the secret key for the KMS
const KMS_SECRET_KEY =
  "11b574d316903ced6cc3f4787bbcc3047d9c72d1da4d83e36fe714ef785d10c1"

const dbConnection = new DataSource({
  type: "sqlite",
  database: DATABASE_FILE,
  synchronize: false,
  migrations,
  migrationsRun: true,
  logging: ["error", "info", "warn"],
  entities: Entities,
}).initialize()

export const agent = createAgent<IDIDManager & IKeyManager & IDataStore & IDataStoreORM & IResolver & ICredentialPlugin>({
  plugins: [
    new KeyManager({
      store: new KeyStore(dbConnection),
      kms: {
        local: new KeyManagementSystem(new PrivateKeyStore(dbConnection, new SecretBox(KMS_SECRET_KEY))),
      },
    }),
    new DIDManager({
      store: new DIDStore(dbConnection),
      defaultProvider: "did:key",
      providers: {
        "did:key": new KeyDIDProvider({
          defaultKms: "local",
        }),
        "did:ethr:sepolia": new EthrDIDProvider({
          defaultKms: "local",
          network: "sepolia",
          rpcUrl: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
        }),
        "did:web": new WebDIDProvider({
          defaultKms: "local",
        }),
      },
    }),
    new DIDResolverPlugin({
      resolver: new Resolver({
        ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID }),
        ...webDidResolver(),
      }),
    }),
    new CredentialPlugin(),
  ],
})
