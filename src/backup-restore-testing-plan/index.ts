/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupRestoreTestingPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#region BackupRestoreTestingPlan#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}
  */
  readonly scheduleExpressionTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}
  */
  readonly startWindowHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * recovery_point_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#recovery_point_selection BackupRestoreTestingPlan#recovery_point_selection}
  */
  readonly recoveryPointSelection?: BackupRestoreTestingPlanRecoveryPointSelection[] | cdktn.IResolvable;
}
export interface BackupRestoreTestingPlanRecoveryPointSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}
  */
  readonly excludeVaults?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}
  */
  readonly includeVaults: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}
  */
  readonly recoveryPointTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}
  */
  readonly selectionWindowDays?: number;
}

export function backupRestoreTestingPlanRecoveryPointSelectionToTerraform(struct?: BackupRestoreTestingPlanRecoveryPointSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    exclude_vaults: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludeVaults),
    include_vaults: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeVaults),
    recovery_point_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.recoveryPointTypes),
    selection_window_days: cdktn.numberToTerraform(struct!.selectionWindowDays),
  }
}


export function backupRestoreTestingPlanRecoveryPointSelectionToHclTerraform(struct?: BackupRestoreTestingPlanRecoveryPointSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_vaults: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludeVaults),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_vaults: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeVaults),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    recovery_point_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.recoveryPointTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    selection_window_days: {
      value: cdktn.numberToHclTerraform(struct!.selectionWindowDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupRestoreTestingPlanRecoveryPointSelectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupRestoreTestingPlanRecoveryPointSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._excludeVaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVaults = this._excludeVaults;
    }
    if (this._includeVaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeVaults = this._includeVaults;
    }
    if (this._recoveryPointTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPointTypes = this._recoveryPointTypes;
    }
    if (this._selectionWindowDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionWindowDays = this._selectionWindowDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupRestoreTestingPlanRecoveryPointSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._excludeVaults = undefined;
      this._includeVaults = undefined;
      this._recoveryPointTypes = undefined;
      this._selectionWindowDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._excludeVaults = value.excludeVaults;
      this._includeVaults = value.includeVaults;
      this._recoveryPointTypes = value.recoveryPointTypes;
      this._selectionWindowDays = value.selectionWindowDays;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // exclude_vaults - computed: true, optional: true, required: false
  private _excludeVaults?: string[]; 
  public get excludeVaults() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude_vaults'));
  }
  public set excludeVaults(value: string[]) {
    this._excludeVaults = value;
  }
  public resetExcludeVaults() {
    this._excludeVaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVaultsInput() {
    return this._excludeVaults;
  }

  // include_vaults - computed: false, optional: false, required: true
  private _includeVaults?: string[]; 
  public get includeVaults() {
    return cdktn.Fn.tolist(this.getListAttribute('include_vaults'));
  }
  public set includeVaults(value: string[]) {
    this._includeVaults = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeVaultsInput() {
    return this._includeVaults;
  }

  // recovery_point_types - computed: false, optional: false, required: true
  private _recoveryPointTypes?: string[]; 
  public get recoveryPointTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('recovery_point_types'));
  }
  public set recoveryPointTypes(value: string[]) {
    this._recoveryPointTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointTypesInput() {
    return this._recoveryPointTypes;
  }

  // selection_window_days - computed: true, optional: true, required: false
  private _selectionWindowDays?: number; 
  public get selectionWindowDays() {
    return this.getNumberAttribute('selection_window_days');
  }
  public set selectionWindowDays(value: number) {
    this._selectionWindowDays = value;
  }
  public resetSelectionWindowDays() {
    this._selectionWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionWindowDaysInput() {
    return this._selectionWindowDays;
  }
}

export class BackupRestoreTestingPlanRecoveryPointSelectionList extends cdktn.ComplexList {
  public internalValue? : BackupRestoreTestingPlanRecoveryPointSelection[] | cdktn.IResolvable

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
  public get(index: number): BackupRestoreTestingPlanRecoveryPointSelectionOutputReference {
    return new BackupRestoreTestingPlanRecoveryPointSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan aws_backup_restore_testing_plan}
*/
export class BackupRestoreTestingPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_backup_restore_testing_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupRestoreTestingPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupRestoreTestingPlan to import
  * @param importFromId The id of the existing BackupRestoreTestingPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupRestoreTestingPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_backup_restore_testing_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_restore_testing_plan aws_backup_restore_testing_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupRestoreTestingPlanConfig
  */
  public constructor(scope: Construct, id: string, config: BackupRestoreTestingPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_backup_restore_testing_plan',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.56.0',
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
    this._scheduleExpression = config.scheduleExpression;
    this._scheduleExpressionTimezone = config.scheduleExpressionTimezone;
    this._startWindowHours = config.startWindowHours;
    this._tags = config.tags;
    this._recoveryPointSelection.internalValue = config.recoveryPointSelection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // schedule_expression_timezone - computed: true, optional: true, required: false
  private _scheduleExpressionTimezone?: string; 
  public get scheduleExpressionTimezone() {
    return this.getStringAttribute('schedule_expression_timezone');
  }
  public set scheduleExpressionTimezone(value: string) {
    this._scheduleExpressionTimezone = value;
  }
  public resetScheduleExpressionTimezone() {
    this._scheduleExpressionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionTimezoneInput() {
    return this._scheduleExpressionTimezone;
  }

  // start_window_hours - computed: true, optional: true, required: false
  private _startWindowHours?: number; 
  public get startWindowHours() {
    return this.getNumberAttribute('start_window_hours');
  }
  public set startWindowHours(value: number) {
    this._startWindowHours = value;
  }
  public resetStartWindowHours() {
    this._startWindowHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startWindowHoursInput() {
    return this._startWindowHours;
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

  // recovery_point_selection - computed: false, optional: true, required: false
  private _recoveryPointSelection = new BackupRestoreTestingPlanRecoveryPointSelectionList(this, "recovery_point_selection", false);
  public get recoveryPointSelection() {
    return this._recoveryPointSelection;
  }
  public putRecoveryPointSelection(value: BackupRestoreTestingPlanRecoveryPointSelection[] | cdktn.IResolvable) {
    this._recoveryPointSelection.internalValue = value;
  }
  public resetRecoveryPointSelection() {
    this._recoveryPointSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointSelectionInput() {
    return this._recoveryPointSelection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      schedule_expression: cdktn.stringToTerraform(this._scheduleExpression),
      schedule_expression_timezone: cdktn.stringToTerraform(this._scheduleExpressionTimezone),
      start_window_hours: cdktn.numberToTerraform(this._startWindowHours),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      recovery_point_selection: cdktn.listMapper(backupRestoreTestingPlanRecoveryPointSelectionToTerraform, true)(this._recoveryPointSelection.internalValue),
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
      schedule_expression: {
        value: cdktn.stringToHclTerraform(this._scheduleExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_expression_timezone: {
        value: cdktn.stringToHclTerraform(this._scheduleExpressionTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_window_hours: {
        value: cdktn.numberToHclTerraform(this._startWindowHours),
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
      recovery_point_selection: {
        value: cdktn.listMapperHcl(backupRestoreTestingPlanRecoveryPointSelectionToHclTerraform, true)(this._recoveryPointSelection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupRestoreTestingPlanRecoveryPointSelectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
