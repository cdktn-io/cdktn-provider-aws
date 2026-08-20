/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralAwsKmsSecretsConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#region EphemeralAwsKmsSecrets#region}
  */
  readonly region?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#secret EphemeralAwsKmsSecrets#secret}
  */
  readonly secret?: EphemeralAwsKmsSecretsSecret[] | cdktn.IResolvable;
}
export interface EphemeralAwsKmsSecretsSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}
  */
  readonly grantTokens?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}
  */
  readonly payload: string;
}

export function ephemeralAwsKmsSecretsSecretToTerraform(struct?: EphemeralAwsKmsSecretsSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    context: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.context),
    encryption_algorithm: cdktn.stringToTerraform(struct!.encryptionAlgorithm),
    grant_tokens: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.grantTokens),
    key_id: cdktn.stringToTerraform(struct!.keyId),
    name: cdktn.stringToTerraform(struct!.name),
    payload: cdktn.stringToTerraform(struct!.payload),
  }
}


export function ephemeralAwsKmsSecretsSecretToHclTerraform(struct?: EphemeralAwsKmsSecretsSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    context: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.context),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    encryption_algorithm: {
      value: cdktn.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_tokens: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.grantTokens),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktn.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EphemeralAwsKmsSecretsSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EphemeralAwsKmsSecretsSecret | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._grantTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantTokens = this._grantTokens;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsKmsSecretsSecret | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._encryptionAlgorithm = undefined;
      this._grantTokens = undefined;
      this._keyId = undefined;
      this._name = undefined;
      this._payload = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._grantTokens = value.grantTokens;
      this._keyId = value.keyId;
      this._name = value.name;
      this._payload = value.payload;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: { [key: string]: string }; 
  public get context() {
    return this.getStringMapAttribute('context');
  }
  public set context(value: { [key: string]: string }) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // grant_tokens - computed: false, optional: true, required: false
  private _grantTokens?: string[]; 
  public get grantTokens() {
    return this.getListAttribute('grant_tokens');
  }
  public set grantTokens(value: string[]) {
    this._grantTokens = value;
  }
  public resetGrantTokens() {
    this._grantTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTokensInput() {
    return this._grantTokens;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}

export class EphemeralAwsKmsSecretsSecretList extends cdktn.ComplexList {
  public internalValue? : EphemeralAwsKmsSecretsSecret[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EphemeralAwsKmsSecretsSecretOutputReference {
    return new EphemeralAwsKmsSecretsSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets aws_kms_secrets}
*/
export class EphemeralAwsKmsSecrets extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kms_secrets";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets aws_kms_secrets} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralAwsKmsSecretsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EphemeralAwsKmsSecretsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_secrets',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._region = config.region;
    this._secret.internalValue = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // plaintext - computed: true, optional: false, required: false
  private _plaintext = new cdktn.StringMap(this, "plaintext");
  public get plaintext() {
    return this._plaintext;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new EphemeralAwsKmsSecretsSecretList(this, "secret", true);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: EphemeralAwsKmsSecretsSecret[] | cdktn.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      secret: cdktn.listMapper(ephemeralAwsKmsSecretsSecretToTerraform, true)(this._secret.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktn.listMapperHcl(ephemeralAwsKmsSecretsSecretToHclTerraform, true)(this._secret.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EphemeralAwsKmsSecretsSecretList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
