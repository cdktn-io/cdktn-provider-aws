/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SavingsplansSavingsPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The hourly commitment, in USD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#commitment SavingsplansSavingsPlan#commitment}
  */
  readonly commitment: string;
  /**
  * The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#purchase_time SavingsplansSavingsPlan#purchase_time}
  */
  readonly purchaseTime?: string;
  /**
  * The unique ID of a Savings Plan offering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#savings_plan_offering_id SavingsplansSavingsPlan#savings_plan_offering_id}
  */
  readonly savingsPlanOfferingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The up-front payment amount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#upfront_payment_amount SavingsplansSavingsPlan#upfront_payment_amount}
  */
  readonly upfrontPaymentAmount?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#timeouts SavingsplansSavingsPlan#timeouts}
  */
  readonly timeouts?: SavingsplansSavingsPlanTimeouts;
}
export interface SavingsplansSavingsPlanTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#create SavingsplansSavingsPlan#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#delete SavingsplansSavingsPlan#delete}
  */
  readonly delete?: string;
}

export function savingsplansSavingsPlanTimeoutsToTerraform(struct?: SavingsplansSavingsPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function savingsplansSavingsPlanTimeoutsToHclTerraform(struct?: SavingsplansSavingsPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SavingsplansSavingsPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SavingsplansSavingsPlanTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SavingsplansSavingsPlanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan aws_savingsplans_savings_plan}
*/
export class SavingsplansSavingsPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_savingsplans_savings_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SavingsplansSavingsPlan to import
  * @param importFromId The id of the existing SavingsplansSavingsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SavingsplansSavingsPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_savingsplans_savings_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/savingsplans_savings_plan aws_savingsplans_savings_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SavingsplansSavingsPlanConfig
  */
  public constructor(scope: Construct, id: string, config: SavingsplansSavingsPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_savingsplans_savings_plan',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._commitment = config.commitment;
    this._purchaseTime = config.purchaseTime;
    this._savingsPlanOfferingId = config.savingsPlanOfferingId;
    this._tags = config.tags;
    this._upfrontPaymentAmount = config.upfrontPaymentAmount;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commitment - computed: false, optional: false, required: true
  private _commitment?: string; 
  public get commitment() {
    return this.getStringAttribute('commitment');
  }
  public set commitment(value: string) {
    this._commitment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentInput() {
    return this._commitment;
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ec2_instance_family - computed: true, optional: false, required: false
  public get ec2InstanceFamily() {
    return this.getStringAttribute('ec2_instance_family');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // offering_id - computed: true, optional: false, required: false
  public get offeringId() {
    return this.getStringAttribute('offering_id');
  }

  // payment_option - computed: true, optional: false, required: false
  public get paymentOption() {
    return this.getStringAttribute('payment_option');
  }

  // product_types - computed: true, optional: false, required: false
  public get productTypes() {
    return this.getListAttribute('product_types');
  }

  // purchase_time - computed: false, optional: true, required: false
  private _purchaseTime?: string; 
  public get purchaseTime() {
    return this.getStringAttribute('purchase_time');
  }
  public set purchaseTime(value: string) {
    this._purchaseTime = value;
  }
  public resetPurchaseTime() {
    this._purchaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchaseTimeInput() {
    return this._purchaseTime;
  }

  // recurring_payment_amount - computed: true, optional: false, required: false
  public get recurringPaymentAmount() {
    return this.getStringAttribute('recurring_payment_amount');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // returnable_until - computed: true, optional: false, required: false
  public get returnableUntil() {
    return this.getStringAttribute('returnable_until');
  }

  // savings_plan_arn - computed: true, optional: false, required: false
  public get savingsPlanArn() {
    return this.getStringAttribute('savings_plan_arn');
  }

  // savings_plan_id - computed: true, optional: false, required: false
  public get savingsPlanId() {
    return this.getStringAttribute('savings_plan_id');
  }

  // savings_plan_offering_id - computed: false, optional: false, required: true
  private _savingsPlanOfferingId?: string; 
  public get savingsPlanOfferingId() {
    return this.getStringAttribute('savings_plan_offering_id');
  }
  public set savingsPlanOfferingId(value: string) {
    this._savingsPlanOfferingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get savingsPlanOfferingIdInput() {
    return this._savingsPlanOfferingId;
  }

  // savings_plan_type - computed: true, optional: false, required: false
  public get savingsPlanType() {
    return this.getStringAttribute('savings_plan_type');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // term_duration_in_seconds - computed: true, optional: false, required: false
  public get termDurationInSeconds() {
    return this.getNumberAttribute('term_duration_in_seconds');
  }

  // upfront_payment_amount - computed: false, optional: true, required: false
  private _upfrontPaymentAmount?: string; 
  public get upfrontPaymentAmount() {
    return this.getStringAttribute('upfront_payment_amount');
  }
  public set upfrontPaymentAmount(value: string) {
    this._upfrontPaymentAmount = value;
  }
  public resetUpfrontPaymentAmount() {
    this._upfrontPaymentAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upfrontPaymentAmountInput() {
    return this._upfrontPaymentAmount;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SavingsplansSavingsPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SavingsplansSavingsPlanTimeouts) {
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
      commitment: cdktf.stringToTerraform(this._commitment),
      purchase_time: cdktf.stringToTerraform(this._purchaseTime),
      savings_plan_offering_id: cdktf.stringToTerraform(this._savingsPlanOfferingId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upfront_payment_amount: cdktf.stringToTerraform(this._upfrontPaymentAmount),
      timeouts: savingsplansSavingsPlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commitment: {
        value: cdktf.stringToHclTerraform(this._commitment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purchase_time: {
        value: cdktf.stringToHclTerraform(this._purchaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      savings_plan_offering_id: {
        value: cdktf.stringToHclTerraform(this._savingsPlanOfferingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      upfront_payment_amount: {
        value: cdktf.stringToHclTerraform(this._upfrontPaymentAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: savingsplansSavingsPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SavingsplansSavingsPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
