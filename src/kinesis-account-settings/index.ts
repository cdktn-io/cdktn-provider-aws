/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_account_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KinesisAccountSettingsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_account_settings#region KinesisAccountSettings#region}
  */
  readonly region?: string;
  /**
  * minimum_throughput_billing_commitment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_account_settings#minimum_throughput_billing_commitment KinesisAccountSettings#minimum_throughput_billing_commitment}
  */
  readonly minimumThroughputBillingCommitment?: KinesisAccountSettingsMinimumThroughputBillingCommitment[] | cdktn.IResolvable;
}
export interface KinesisAccountSettingsMinimumThroughputBillingCommitment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_account_settings#status KinesisAccountSettings#status}
  */
  readonly status: string;
}

export function kinesisAccountSettingsMinimumThroughputBillingCommitmentToTerraform(struct?: KinesisAccountSettingsMinimumThroughputBillingCommitment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function kinesisAccountSettingsMinimumThroughputBillingCommitmentToHclTerraform(struct?: KinesisAccountSettingsMinimumThroughputBillingCommitment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KinesisAccountSettingsMinimumThroughputBillingCommitment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAccountSettingsMinimumThroughputBillingCommitment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // earliest_allowed_end_at - computed: true, optional: false, required: false
  public get earliestAllowedEndAt() {
    return this.getStringAttribute('earliest_allowed_end_at');
  }

  // ended_at - computed: true, optional: false, required: false
  public get endedAt() {
    return this.getStringAttribute('ended_at');
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_actual - computed: true, optional: false, required: false
  public get statusActual() {
    return this.getStringAttribute('status_actual');
  }
}

export class KinesisAccountSettingsMinimumThroughputBillingCommitmentList extends cdktn.ComplexList {
  public internalValue? : KinesisAccountSettingsMinimumThroughputBillingCommitment[] | cdktn.IResolvable

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
  public get(index: number): KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference {
    return new KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_account_settings aws_kinesis_account_settings}
*/
export class KinesisAccountSettings extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kinesis_account_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KinesisAccountSettings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KinesisAccountSettings to import
  * @param importFromId The id of the existing KinesisAccountSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_account_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KinesisAccountSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_kinesis_account_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/kinesis_account_settings aws_kinesis_account_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisAccountSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KinesisAccountSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_account_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.62.0',
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
    this._minimumThroughputBillingCommitment.internalValue = config.minimumThroughputBillingCommitment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // minimum_throughput_billing_commitment - computed: false, optional: true, required: false
  private _minimumThroughputBillingCommitment = new KinesisAccountSettingsMinimumThroughputBillingCommitmentList(this, "minimum_throughput_billing_commitment", false);
  public get minimumThroughputBillingCommitment() {
    return this._minimumThroughputBillingCommitment;
  }
  public putMinimumThroughputBillingCommitment(value: KinesisAccountSettingsMinimumThroughputBillingCommitment[] | cdktn.IResolvable) {
    this._minimumThroughputBillingCommitment.internalValue = value;
  }
  public resetMinimumThroughputBillingCommitment() {
    this._minimumThroughputBillingCommitment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumThroughputBillingCommitmentInput() {
    return this._minimumThroughputBillingCommitment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      minimum_throughput_billing_commitment: cdktn.listMapper(kinesisAccountSettingsMinimumThroughputBillingCommitmentToTerraform, true)(this._minimumThroughputBillingCommitment.internalValue),
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
      minimum_throughput_billing_commitment: {
        value: cdktn.listMapperHcl(kinesisAccountSettingsMinimumThroughputBillingCommitmentToHclTerraform, true)(this._minimumThroughputBillingCommitment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisAccountSettingsMinimumThroughputBillingCommitmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
