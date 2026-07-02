/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KmsGrantConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}
  */
  readonly grantCreationTokens?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#grantee_principal KmsGrant#grantee_principal}
  */
  readonly granteePrincipal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#id KmsGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#key_id KmsGrant#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#name KmsGrant#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#operations KmsGrant#operations}
  */
  readonly operations: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#region KmsGrant#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#retire_on_delete KmsGrant#retire_on_delete}
  */
  readonly retireOnDelete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#retiring_principal KmsGrant#retiring_principal}
  */
  readonly retiringPrincipal?: string;
  /**
  * constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#constraints KmsGrant#constraints}
  */
  readonly constraints?: KmsGrantConstraints[] | cdktn.IResolvable;
}
export interface KmsGrantConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#encryption_context_equals KmsGrant#encryption_context_equals}
  */
  readonly encryptionContextEquals?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#encryption_context_subset KmsGrant#encryption_context_subset}
  */
  readonly encryptionContextSubset?: { [key: string]: string };
}

export function kmsGrantConstraintsToTerraform(struct?: KmsGrantConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_context_equals: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.encryptionContextEquals),
    encryption_context_subset: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.encryptionContextSubset),
  }
}


export function kmsGrantConstraintsToHclTerraform(struct?: KmsGrantConstraints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_context_equals: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.encryptionContextEquals),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    encryption_context_subset: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.encryptionContextSubset),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsGrantConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KmsGrantConstraints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionContextEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContextEquals = this._encryptionContextEquals;
    }
    if (this._encryptionContextSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContextSubset = this._encryptionContextSubset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsGrantConstraints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionContextEquals = undefined;
      this._encryptionContextSubset = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionContextEquals = value.encryptionContextEquals;
      this._encryptionContextSubset = value.encryptionContextSubset;
    }
  }

  // encryption_context_equals - computed: false, optional: true, required: false
  private _encryptionContextEquals?: { [key: string]: string }; 
  public get encryptionContextEquals() {
    return this.getStringMapAttribute('encryption_context_equals');
  }
  public set encryptionContextEquals(value: { [key: string]: string }) {
    this._encryptionContextEquals = value;
  }
  public resetEncryptionContextEquals() {
    this._encryptionContextEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContextEqualsInput() {
    return this._encryptionContextEquals;
  }

  // encryption_context_subset - computed: false, optional: true, required: false
  private _encryptionContextSubset?: { [key: string]: string }; 
  public get encryptionContextSubset() {
    return this.getStringMapAttribute('encryption_context_subset');
  }
  public set encryptionContextSubset(value: { [key: string]: string }) {
    this._encryptionContextSubset = value;
  }
  public resetEncryptionContextSubset() {
    this._encryptionContextSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContextSubsetInput() {
    return this._encryptionContextSubset;
  }
}

export class KmsGrantConstraintsList extends cdktn.ComplexList {
  public internalValue? : KmsGrantConstraints[] | cdktn.IResolvable

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
  public get(index: number): KmsGrantConstraintsOutputReference {
    return new KmsGrantConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant aws_kms_grant}
*/
export class KmsGrant extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kms_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KmsGrant resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsGrant to import
  * @param importFromId The id of the existing KmsGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_kms_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/kms_grant aws_kms_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsGrantConfig
  */
  public constructor(scope: Construct, id: string, config: KmsGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.53.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._grantCreationTokens = config.grantCreationTokens;
    this._granteePrincipal = config.granteePrincipal;
    this._id = config.id;
    this._keyId = config.keyId;
    this._name = config.name;
    this._operations = config.operations;
    this._region = config.region;
    this._retireOnDelete = config.retireOnDelete;
    this._retiringPrincipal = config.retiringPrincipal;
    this._constraints.internalValue = config.constraints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grant_creation_tokens - computed: false, optional: true, required: false
  private _grantCreationTokens?: string[]; 
  public get grantCreationTokens() {
    return cdktn.Fn.tolist(this.getListAttribute('grant_creation_tokens'));
  }
  public set grantCreationTokens(value: string[]) {
    this._grantCreationTokens = value;
  }
  public resetGrantCreationTokens() {
    this._grantCreationTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantCreationTokensInput() {
    return this._grantCreationTokens;
  }

  // grant_id - computed: true, optional: false, required: false
  public get grantId() {
    return this.getStringAttribute('grant_id');
  }

  // grant_token - computed: true, optional: false, required: false
  public get grantToken() {
    return this.getStringAttribute('grant_token');
  }

  // grantee_principal - computed: false, optional: false, required: true
  private _granteePrincipal?: string; 
  public get granteePrincipal() {
    return this.getStringAttribute('grantee_principal');
  }
  public set granteePrincipal(value: string) {
    this._granteePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteePrincipalInput() {
    return this._granteePrincipal;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return cdktn.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
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

  // retire_on_delete - computed: false, optional: true, required: false
  private _retireOnDelete?: boolean | cdktn.IResolvable; 
  public get retireOnDelete() {
    return this.getBooleanAttribute('retire_on_delete');
  }
  public set retireOnDelete(value: boolean | cdktn.IResolvable) {
    this._retireOnDelete = value;
  }
  public resetRetireOnDelete() {
    this._retireOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retireOnDeleteInput() {
    return this._retireOnDelete;
  }

  // retiring_principal - computed: false, optional: true, required: false
  private _retiringPrincipal?: string; 
  public get retiringPrincipal() {
    return this.getStringAttribute('retiring_principal');
  }
  public set retiringPrincipal(value: string) {
    this._retiringPrincipal = value;
  }
  public resetRetiringPrincipal() {
    this._retiringPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retiringPrincipalInput() {
    return this._retiringPrincipal;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new KmsGrantConstraintsList(this, "constraints", true);
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: KmsGrantConstraints[] | cdktn.IResolvable) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grant_creation_tokens: cdktn.listMapper(cdktn.stringToTerraform, false)(this._grantCreationTokens),
      grantee_principal: cdktn.stringToTerraform(this._granteePrincipal),
      id: cdktn.stringToTerraform(this._id),
      key_id: cdktn.stringToTerraform(this._keyId),
      name: cdktn.stringToTerraform(this._name),
      operations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._operations),
      region: cdktn.stringToTerraform(this._region),
      retire_on_delete: cdktn.booleanToTerraform(this._retireOnDelete),
      retiring_principal: cdktn.stringToTerraform(this._retiringPrincipal),
      constraints: cdktn.listMapper(kmsGrantConstraintsToTerraform, true)(this._constraints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grant_creation_tokens: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._grantCreationTokens),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      grantee_principal: {
        value: cdktn.stringToHclTerraform(this._granteePrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktn.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._operations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retire_on_delete: {
        value: cdktn.booleanToHclTerraform(this._retireOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retiring_principal: {
        value: cdktn.stringToHclTerraform(this._retiringPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constraints: {
        value: cdktn.listMapperHcl(kmsGrantConstraintsToHclTerraform, true)(this._constraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KmsGrantConstraintsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
