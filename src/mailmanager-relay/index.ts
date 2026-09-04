/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MailmanagerRelayConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#name MailmanagerRelay#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#region MailmanagerRelay#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_name MailmanagerRelay#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#server_port MailmanagerRelay#server_port}
  */
  readonly serverPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#tags MailmanagerRelay#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#authentication MailmanagerRelay#authentication}
  */
  readonly authentication?: MailmanagerRelayAuthentication[] | cdktn.IResolvable;
}
export interface MailmanagerRelayAuthenticationNoAuthentication {
}

export function mailmanagerRelayAuthenticationNoAuthenticationToTerraform(struct?: MailmanagerRelayAuthenticationNoAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function mailmanagerRelayAuthenticationNoAuthenticationToHclTerraform(struct?: MailmanagerRelayAuthenticationNoAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MailmanagerRelayAuthenticationNoAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRelayAuthenticationNoAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRelayAuthenticationNoAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class MailmanagerRelayAuthenticationNoAuthenticationList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRelayAuthenticationNoAuthentication[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRelayAuthenticationNoAuthenticationOutputReference {
    return new MailmanagerRelayAuthenticationNoAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRelayAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#secret_arn MailmanagerRelay#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * no_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#no_authentication MailmanagerRelay#no_authentication}
  */
  readonly noAuthentication?: MailmanagerRelayAuthenticationNoAuthentication[] | cdktn.IResolvable;
}

export function mailmanagerRelayAuthenticationToTerraform(struct?: MailmanagerRelayAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    no_authentication: cdktn.listMapper(mailmanagerRelayAuthenticationNoAuthenticationToTerraform, true)(struct!.noAuthentication),
  }
}


export function mailmanagerRelayAuthenticationToHclTerraform(struct?: MailmanagerRelayAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_authentication: {
      value: cdktn.listMapperHcl(mailmanagerRelayAuthenticationNoAuthenticationToHclTerraform, true)(struct!.noAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRelayAuthenticationNoAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRelayAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRelayAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._noAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuthentication = this._noAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRelayAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretArn = undefined;
      this._noAuthentication.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretArn = value.secretArn;
      this._noAuthentication.internalValue = value.noAuthentication;
    }
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // no_authentication - computed: false, optional: true, required: false
  private _noAuthentication = new MailmanagerRelayAuthenticationNoAuthenticationList(this, "no_authentication", false);
  public get noAuthentication() {
    return this._noAuthentication;
  }
  public putNoAuthentication(value: MailmanagerRelayAuthenticationNoAuthentication[] | cdktn.IResolvable) {
    this._noAuthentication.internalValue = value;
  }
  public resetNoAuthentication() {
    this._noAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthenticationInput() {
    return this._noAuthentication.internalValue;
  }
}

export class MailmanagerRelayAuthenticationList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRelayAuthentication[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRelayAuthenticationOutputReference {
    return new MailmanagerRelayAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay aws_mailmanager_relay}
*/
export class MailmanagerRelay extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mailmanager_relay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MailmanagerRelay resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MailmanagerRelay to import
  * @param importFromId The id of the existing MailmanagerRelay that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MailmanagerRelay to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_mailmanager_relay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_relay aws_mailmanager_relay} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailmanagerRelayConfig
  */
  public constructor(scope: Construct, id: string, config: MailmanagerRelayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mailmanager_relay',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.63.0',
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
    this._name = config.name;
    this._region = config.region;
    this._serverName = config.serverName;
    this._serverPort = config.serverPort;
    this._tags = config.tags;
    this._authentication.internalValue = config.authentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_timestamp - computed: true, optional: false, required: false
  public get lastModifiedTimestamp() {
    return this.getStringAttribute('last_modified_timestamp');
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

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // server_port - computed: false, optional: false, required: true
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new MailmanagerRelayAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: MailmanagerRelayAuthentication[] | cdktn.IResolvable) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      server_name: cdktn.stringToTerraform(this._serverName),
      server_port: cdktn.numberToTerraform(this._serverPort),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      authentication: cdktn.listMapper(mailmanagerRelayAuthenticationToTerraform, true)(this._authentication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktn.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_port: {
        value: cdktn.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      authentication: {
        value: cdktn.listMapperHcl(mailmanagerRelayAuthenticationToHclTerraform, true)(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MailmanagerRelayAuthenticationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
