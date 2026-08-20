/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Pinpointsmsvoicev2PoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether deletion protection is enabled. When `true`, the pool cannot be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#deletion_protection_enabled Pinpointsmsvoicev2Pool#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktn.IResolvable;
  /**
  * Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool. This field is optional for origination identity types that are not country-specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#iso_country_code Pinpointsmsvoicev2Pool#iso_country_code}
  */
  readonly isoCountryCode?: string;
  /**
  * Type of message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#message_type Pinpointsmsvoicev2Pool#message_type}
  */
  readonly messageType: string;
  /**
  * Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#opt_out_list_name Pinpointsmsvoicev2Pool#opt_out_list_name}
  */
  readonly optOutListName?: string;
  /**
  * Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#origination_identities Pinpointsmsvoicev2Pool#origination_identities}
  */
  readonly originationIdentities: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#region Pinpointsmsvoicev2Pool#region}
  */
  readonly region?: string;
  /**
  * Whether the pool relies on self-managed opt-out handling. When `false`, AWS auto-replies to HELP/STOP requests and manages the opt-out list. Inherited from the initial origination identity when omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#self_managed_opt_outs_enabled Pinpointsmsvoicev2Pool#self_managed_opt_outs_enabled}
  */
  readonly selfManagedOptOutsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether shared routes are enabled for the pool. When `true`, messages may use shared phone numbers or sender IDs in countries that allow it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#shared_routes_enabled Pinpointsmsvoicev2Pool#shared_routes_enabled}
  */
  readonly sharedRoutesEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ARN of the two-way channel that receives inbound messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_arn Pinpointsmsvoicev2Pool#two_way_channel_arn}
  */
  readonly twoWayChannelArn?: string;
  /**
  * ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_role Pinpointsmsvoicev2Pool#two_way_channel_role}
  */
  readonly twoWayChannelRole?: string;
  /**
  * Whether inbound message reception is enabled for the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#two_way_enabled Pinpointsmsvoicev2Pool#two_way_enabled}
  */
  readonly twoWayEnabled?: boolean | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#timeouts Pinpointsmsvoicev2Pool#timeouts}
  */
  readonly timeouts?: Pinpointsmsvoicev2PoolTimeouts;
}
export interface Pinpointsmsvoicev2PoolTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#create Pinpointsmsvoicev2Pool#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#delete Pinpointsmsvoicev2Pool#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#update Pinpointsmsvoicev2Pool#update}
  */
  readonly update?: string;
}

export function pinpointsmsvoicev2PoolTimeoutsToTerraform(struct?: Pinpointsmsvoicev2PoolTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function pinpointsmsvoicev2PoolTimeoutsToHclTerraform(struct?: Pinpointsmsvoicev2PoolTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Pinpointsmsvoicev2PoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Pinpointsmsvoicev2PoolTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Pinpointsmsvoicev2PoolTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool aws_pinpointsmsvoicev2_pool}
*/
export class Pinpointsmsvoicev2Pool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_pinpointsmsvoicev2_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2Pool to import
  * @param importFromId The id of the existing Pinpointsmsvoicev2Pool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2Pool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_pinpointsmsvoicev2_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_pool aws_pinpointsmsvoicev2_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Pinpointsmsvoicev2PoolConfig
  */
  public constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2PoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_pinpointsmsvoicev2_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
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
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._isoCountryCode = config.isoCountryCode;
    this._messageType = config.messageType;
    this._optOutListName = config.optOutListName;
    this._originationIdentities = config.originationIdentities;
    this._region = config.region;
    this._selfManagedOptOutsEnabled = config.selfManagedOptOutsEnabled;
    this._sharedRoutesEnabled = config.sharedRoutesEnabled;
    this._tags = config.tags;
    this._twoWayChannelArn = config.twoWayChannelArn;
    this._twoWayChannelRole = config.twoWayChannelRole;
    this._twoWayEnabled = config.twoWayEnabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protection_enabled - computed: true, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktn.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktn.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iso_country_code - computed: false, optional: true, required: false
  private _isoCountryCode?: string; 
  public get isoCountryCode() {
    return this.getStringAttribute('iso_country_code');
  }
  public set isoCountryCode(value: string) {
    this._isoCountryCode = value;
  }
  public resetIsoCountryCode() {
    this._isoCountryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoCountryCodeInput() {
    return this._isoCountryCode;
  }

  // message_type - computed: false, optional: false, required: true
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // opt_out_list_name - computed: true, optional: true, required: false
  private _optOutListName?: string; 
  public get optOutListName() {
    return this.getStringAttribute('opt_out_list_name');
  }
  public set optOutListName(value: string) {
    this._optOutListName = value;
  }
  public resetOptOutListName() {
    this._optOutListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optOutListNameInput() {
    return this._optOutListName;
  }

  // origination_identities - computed: false, optional: false, required: true
  private _originationIdentities?: string[]; 
  public get originationIdentities() {
    return cdktn.Fn.tolist(this.getListAttribute('origination_identities'));
  }
  public set originationIdentities(value: string[]) {
    this._originationIdentities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originationIdentitiesInput() {
    return this._originationIdentities;
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

  // self_managed_opt_outs_enabled - computed: true, optional: true, required: false
  private _selfManagedOptOutsEnabled?: boolean | cdktn.IResolvable; 
  public get selfManagedOptOutsEnabled() {
    return this.getBooleanAttribute('self_managed_opt_outs_enabled');
  }
  public set selfManagedOptOutsEnabled(value: boolean | cdktn.IResolvable) {
    this._selfManagedOptOutsEnabled = value;
  }
  public resetSelfManagedOptOutsEnabled() {
    this._selfManagedOptOutsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedOptOutsEnabledInput() {
    return this._selfManagedOptOutsEnabled;
  }

  // shared_routes_enabled - computed: true, optional: true, required: false
  private _sharedRoutesEnabled?: boolean | cdktn.IResolvable; 
  public get sharedRoutesEnabled() {
    return this.getBooleanAttribute('shared_routes_enabled');
  }
  public set sharedRoutesEnabled(value: boolean | cdktn.IResolvable) {
    this._sharedRoutesEnabled = value;
  }
  public resetSharedRoutesEnabled() {
    this._sharedRoutesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedRoutesEnabledInput() {
    return this._sharedRoutesEnabled;
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

  // two_way_channel_arn - computed: false, optional: true, required: false
  private _twoWayChannelArn?: string; 
  public get twoWayChannelArn() {
    return this.getStringAttribute('two_way_channel_arn');
  }
  public set twoWayChannelArn(value: string) {
    this._twoWayChannelArn = value;
  }
  public resetTwoWayChannelArn() {
    this._twoWayChannelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayChannelArnInput() {
    return this._twoWayChannelArn;
  }

  // two_way_channel_role - computed: false, optional: true, required: false
  private _twoWayChannelRole?: string; 
  public get twoWayChannelRole() {
    return this.getStringAttribute('two_way_channel_role');
  }
  public set twoWayChannelRole(value: string) {
    this._twoWayChannelRole = value;
  }
  public resetTwoWayChannelRole() {
    this._twoWayChannelRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayChannelRoleInput() {
    return this._twoWayChannelRole;
  }

  // two_way_enabled - computed: true, optional: true, required: false
  private _twoWayEnabled?: boolean | cdktn.IResolvable; 
  public get twoWayEnabled() {
    return this.getBooleanAttribute('two_way_enabled');
  }
  public set twoWayEnabled(value: boolean | cdktn.IResolvable) {
    this._twoWayEnabled = value;
  }
  public resetTwoWayEnabled() {
    this._twoWayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoWayEnabledInput() {
    return this._twoWayEnabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Pinpointsmsvoicev2PoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Pinpointsmsvoicev2PoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection_enabled: cdktn.booleanToTerraform(this._deletionProtectionEnabled),
      iso_country_code: cdktn.stringToTerraform(this._isoCountryCode),
      message_type: cdktn.stringToTerraform(this._messageType),
      opt_out_list_name: cdktn.stringToTerraform(this._optOutListName),
      origination_identities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._originationIdentities),
      region: cdktn.stringToTerraform(this._region),
      self_managed_opt_outs_enabled: cdktn.booleanToTerraform(this._selfManagedOptOutsEnabled),
      shared_routes_enabled: cdktn.booleanToTerraform(this._sharedRoutesEnabled),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      two_way_channel_arn: cdktn.stringToTerraform(this._twoWayChannelArn),
      two_way_channel_role: cdktn.stringToTerraform(this._twoWayChannelRole),
      two_way_enabled: cdktn.booleanToTerraform(this._twoWayEnabled),
      timeouts: pinpointsmsvoicev2PoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection_enabled: {
        value: cdktn.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iso_country_code: {
        value: cdktn.stringToHclTerraform(this._isoCountryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_type: {
        value: cdktn.stringToHclTerraform(this._messageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_out_list_name: {
        value: cdktn.stringToHclTerraform(this._optOutListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origination_identities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._originationIdentities),
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
      self_managed_opt_outs_enabled: {
        value: cdktn.booleanToHclTerraform(this._selfManagedOptOutsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_routes_enabled: {
        value: cdktn.booleanToHclTerraform(this._sharedRoutesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      two_way_channel_arn: {
        value: cdktn.stringToHclTerraform(this._twoWayChannelArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_way_channel_role: {
        value: cdktn.stringToHclTerraform(this._twoWayChannelRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_way_enabled: {
        value: cdktn.booleanToHclTerraform(this._twoWayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: pinpointsmsvoicev2PoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Pinpointsmsvoicev2PoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
