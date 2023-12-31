/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { type Hashable, hashArray } from '@finos/legend-shared';
import { MASTERY_HASH_STRUCTURE } from '../../../../../DSL_Mastery_HashUtils.js';

export abstract class AuthenticationStrategy implements Hashable {
  credential?: CredentialSecret | undefined;

  get hashCode(): string {
    return hashArray([
      MASTERY_HASH_STRUCTURE.MASTERY_AUTHENTICATION_STRATEGY,
      this.credential ?? '',
    ]);
  }
}

export class NTLMAuthenticationStrategy extends AuthenticationStrategy {
  override get hashCode(): string {
    return hashArray([
      MASTERY_HASH_STRUCTURE.NTLM_AUTHENTICATION_STRATEGY,
      super.hashCode,
    ]);
  }
}

export class TokenAuthenticationStrategy extends AuthenticationStrategy {
  tokenUrl!: string;

  override get hashCode(): string {
    return hashArray([
      MASTERY_HASH_STRUCTURE.TOKEN_AUTHENTICATION_STRATEGY,
      this.tokenUrl,
      super.hashCode,
    ]);
  }
}

export abstract class CredentialSecret implements Hashable {
  get hashCode(): string {
    return hashArray([MASTERY_HASH_STRUCTURE.MASTERY_CREDENTIAL_SECRET]);
  }
}
