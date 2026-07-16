/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsSecurityhubEnabledStandardsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards#region DataAwsSecurityhubEnabledStandards#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}
  */
  readonly standardsSubscriptionArns?: string[];
}
export interface DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason {
}

export function dataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonToTerraform(struct?: DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonToHclTerraform(struct?: DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status_reason_code - computed: true, optional: false, required: false
  public get statusReasonCode() {
    return this.getStringAttribute('status_reason_code');
  }
}

export class DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference {
    return new DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSecurityhubEnabledStandardsStandardsSubscriptions {
}

export function dataAwsSecurityhubEnabledStandardsStandardsSubscriptionsToTerraform(struct?: DataAwsSecurityhubEnabledStandardsStandardsSubscriptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsSecurityhubEnabledStandardsStandardsSubscriptionsToHclTerraform(struct?: DataAwsSecurityhubEnabledStandardsStandardsSubscriptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSecurityhubEnabledStandardsStandardsSubscriptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSecurityhubEnabledStandardsStandardsSubscriptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // standards_arn - computed: true, optional: false, required: false
  public get standardsArn() {
    return this.getStringAttribute('standards_arn');
  }

  // standards_controls_updatable - computed: true, optional: false, required: false
  public get standardsControlsUpdatable() {
    return this.getStringAttribute('standards_controls_updatable');
  }

  // standards_inputs - computed: true, optional: false, required: false
  private _standardsInputs = new cdktn.StringMap(this, "standards_inputs");
  public get standardsInputs() {
    return this._standardsInputs;
  }

  // standards_status - computed: true, optional: false, required: false
  public get standardsStatus() {
    return this.getStringAttribute('standards_status');
  }

  // standards_status_reason - computed: true, optional: false, required: false
  private _standardsStatusReason = new DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList(this, "standards_status_reason", false);
  public get standardsStatusReason() {
    return this._standardsStatusReason;
  }

  // standards_subscription_arn - computed: true, optional: false, required: false
  public get standardsSubscriptionArn() {
    return this.getStringAttribute('standards_subscription_arn');
  }
}

export class DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference {
    return new DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards aws_securityhub_enabled_standards}
*/
export class DataAwsSecurityhubEnabledStandards extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_enabled_standards";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsSecurityhubEnabledStandards resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSecurityhubEnabledStandards to import
  * @param importFromId The id of the existing DataAwsSecurityhubEnabledStandards that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSecurityhubEnabledStandards to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_enabled_standards", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/securityhub_enabled_standards aws_securityhub_enabled_standards} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSecurityhubEnabledStandardsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSecurityhubEnabledStandardsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_enabled_standards',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.55.0',
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
    this._region = config.region;
    this._standardsSubscriptionArns = config.standardsSubscriptionArns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // standards_subscription_arns - computed: false, optional: true, required: false
  private _standardsSubscriptionArns?: string[]; 
  public get standardsSubscriptionArns() {
    return this.getListAttribute('standards_subscription_arns');
  }
  public set standardsSubscriptionArns(value: string[]) {
    this._standardsSubscriptionArns = value;
  }
  public resetStandardsSubscriptionArns() {
    this._standardsSubscriptionArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardsSubscriptionArnsInput() {
    return this._standardsSubscriptionArns;
  }

  // standards_subscriptions - computed: true, optional: false, required: false
  private _standardsSubscriptions = new DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList(this, "standards_subscriptions", false);
  public get standardsSubscriptions() {
    return this._standardsSubscriptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      standards_subscription_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._standardsSubscriptionArns),
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
      standards_subscription_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._standardsSubscriptionArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
