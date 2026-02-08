/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSavingsplansSavingsPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Savings Plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan#savings_plan_id DataAwsSavingsplansSavingsPlan#savings_plan_id}
  */
  readonly savingsPlanId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan aws_savingsplans_savings_plan}
*/
export class DataAwsSavingsplansSavingsPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_savingsplans_savings_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSavingsplansSavingsPlan to import
  * @param importFromId The id of the existing DataAwsSavingsplansSavingsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSavingsplansSavingsPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_savingsplans_savings_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan aws_savingsplans_savings_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSavingsplansSavingsPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSavingsplansSavingsPlanConfig) {
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
    this._savingsPlanId = config.savingsPlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commitment - computed: true, optional: false, required: false
  public get commitment() {
    return this.getStringAttribute('commitment');
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

  // purchase_time - computed: true, optional: false, required: false
  public get purchaseTime() {
    return this.getStringAttribute('purchase_time');
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

  // savings_plan_id - computed: false, optional: false, required: true
  private _savingsPlanId?: string; 
  public get savingsPlanId() {
    return this.getStringAttribute('savings_plan_id');
  }
  public set savingsPlanId(value: string) {
    this._savingsPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get savingsPlanIdInput() {
    return this._savingsPlanId;
  }

  // savings_plan_offering_id - computed: true, optional: false, required: false
  public get savingsPlanOfferingId() {
    return this.getStringAttribute('savings_plan_offering_id');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // term_duration_in_seconds - computed: true, optional: false, required: false
  public get termDurationInSeconds() {
    return this.getNumberAttribute('term_duration_in_seconds');
  }

  // upfront_payment_amount - computed: true, optional: false, required: false
  public get upfrontPaymentAmount() {
    return this.getStringAttribute('upfront_payment_amount');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      savings_plan_id: cdktf.stringToTerraform(this._savingsPlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      savings_plan_id: {
        value: cdktf.stringToHclTerraform(this._savingsPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
