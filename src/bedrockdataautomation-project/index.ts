/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockdataautomationProjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#description BedrockdataautomationProject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#name BedrockdataautomationProject#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#region BedrockdataautomationProject#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#tags BedrockdataautomationProject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#type BedrockdataautomationProject#type}
  */
  readonly type?: string;
  /**
  * custom_output_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#custom_output_configuration BedrockdataautomationProject#custom_output_configuration}
  */
  readonly customOutputConfiguration?: BedrockdataautomationProjectCustomOutputConfiguration[] | cdktn.IResolvable;
  /**
  * data_automation_library_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#data_automation_library_configuration BedrockdataautomationProject#data_automation_library_configuration}
  */
  readonly dataAutomationLibraryConfiguration?: BedrockdataautomationProjectDataAutomationLibraryConfiguration[] | cdktn.IResolvable;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#encryption_configuration BedrockdataautomationProject#encryption_configuration}
  */
  readonly encryptionConfiguration?: BedrockdataautomationProjectEncryptionConfiguration[] | cdktn.IResolvable;
  /**
  * override_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#override_configuration BedrockdataautomationProject#override_configuration}
  */
  readonly overrideConfiguration?: BedrockdataautomationProjectOverrideConfiguration[] | cdktn.IResolvable;
  /**
  * standard_output_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#standard_output_configuration BedrockdataautomationProject#standard_output_configuration}
  */
  readonly standardOutputConfiguration?: BedrockdataautomationProjectStandardOutputConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#timeouts BedrockdataautomationProject#timeouts}
  */
  readonly timeouts?: BedrockdataautomationProjectTimeouts;
}
export interface BedrockdataautomationProjectCustomOutputConfigurationBlueprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#blueprint_arn BedrockdataautomationProject#blueprint_arn}
  */
  readonly blueprintArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#blueprint_stage BedrockdataautomationProject#blueprint_stage}
  */
  readonly blueprintStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#blueprint_version BedrockdataautomationProject#blueprint_version}
  */
  readonly blueprintVersion?: string;
}

export function bedrockdataautomationProjectCustomOutputConfigurationBlueprintToTerraform(struct?: BedrockdataautomationProjectCustomOutputConfigurationBlueprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blueprint_arn: cdktn.stringToTerraform(struct!.blueprintArn),
    blueprint_stage: cdktn.stringToTerraform(struct!.blueprintStage),
    blueprint_version: cdktn.stringToTerraform(struct!.blueprintVersion),
  }
}


export function bedrockdataautomationProjectCustomOutputConfigurationBlueprintToHclTerraform(struct?: BedrockdataautomationProjectCustomOutputConfigurationBlueprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blueprint_arn: {
      value: cdktn.stringToHclTerraform(struct!.blueprintArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blueprint_stage: {
      value: cdktn.stringToHclTerraform(struct!.blueprintStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blueprint_version: {
      value: cdktn.stringToHclTerraform(struct!.blueprintVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectCustomOutputConfigurationBlueprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectCustomOutputConfigurationBlueprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintArn = this._blueprintArn;
    }
    if (this._blueprintStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintStage = this._blueprintStage;
    }
    if (this._blueprintVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintVersion = this._blueprintVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectCustomOutputConfigurationBlueprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintArn = undefined;
      this._blueprintStage = undefined;
      this._blueprintVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintArn = value.blueprintArn;
      this._blueprintStage = value.blueprintStage;
      this._blueprintVersion = value.blueprintVersion;
    }
  }

  // blueprint_arn - computed: false, optional: false, required: true
  private _blueprintArn?: string; 
  public get blueprintArn() {
    return this.getStringAttribute('blueprint_arn');
  }
  public set blueprintArn(value: string) {
    this._blueprintArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintArnInput() {
    return this._blueprintArn;
  }

  // blueprint_stage - computed: false, optional: true, required: false
  private _blueprintStage?: string; 
  public get blueprintStage() {
    return this.getStringAttribute('blueprint_stage');
  }
  public set blueprintStage(value: string) {
    this._blueprintStage = value;
  }
  public resetBlueprintStage() {
    this._blueprintStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintStageInput() {
    return this._blueprintStage;
  }

  // blueprint_version - computed: false, optional: true, required: false
  private _blueprintVersion?: string; 
  public get blueprintVersion() {
    return this.getStringAttribute('blueprint_version');
  }
  public set blueprintVersion(value: string) {
    this._blueprintVersion = value;
  }
  public resetBlueprintVersion() {
    this._blueprintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintVersionInput() {
    return this._blueprintVersion;
  }
}

export class BedrockdataautomationProjectCustomOutputConfigurationBlueprintList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectCustomOutputConfigurationBlueprint[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectCustomOutputConfigurationBlueprintOutputReference {
    return new BedrockdataautomationProjectCustomOutputConfigurationBlueprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#blueprint_arn BedrockdataautomationProject#blueprint_arn}
  */
  readonly blueprintArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#blueprint_stage BedrockdataautomationProject#blueprint_stage}
  */
  readonly blueprintStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#blueprint_version BedrockdataautomationProject#blueprint_version}
  */
  readonly blueprintVersion?: string;
}

export function bedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintToTerraform(struct?: BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blueprint_arn: cdktn.stringToTerraform(struct!.blueprintArn),
    blueprint_stage: cdktn.stringToTerraform(struct!.blueprintStage),
    blueprint_version: cdktn.stringToTerraform(struct!.blueprintVersion),
  }
}


export function bedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintToHclTerraform(struct?: BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blueprint_arn: {
      value: cdktn.stringToHclTerraform(struct!.blueprintArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blueprint_stage: {
      value: cdktn.stringToHclTerraform(struct!.blueprintStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blueprint_version: {
      value: cdktn.stringToHclTerraform(struct!.blueprintVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintArn = this._blueprintArn;
    }
    if (this._blueprintStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintStage = this._blueprintStage;
    }
    if (this._blueprintVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintVersion = this._blueprintVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintArn = undefined;
      this._blueprintStage = undefined;
      this._blueprintVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintArn = value.blueprintArn;
      this._blueprintStage = value.blueprintStage;
      this._blueprintVersion = value.blueprintVersion;
    }
  }

  // blueprint_arn - computed: false, optional: false, required: true
  private _blueprintArn?: string; 
  public get blueprintArn() {
    return this.getStringAttribute('blueprint_arn');
  }
  public set blueprintArn(value: string) {
    this._blueprintArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintArnInput() {
    return this._blueprintArn;
  }

  // blueprint_stage - computed: false, optional: true, required: false
  private _blueprintStage?: string; 
  public get blueprintStage() {
    return this.getStringAttribute('blueprint_stage');
  }
  public set blueprintStage(value: string) {
    this._blueprintStage = value;
  }
  public resetBlueprintStage() {
    this._blueprintStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintStageInput() {
    return this._blueprintStage;
  }

  // blueprint_version - computed: false, optional: true, required: false
  private _blueprintVersion?: string; 
  public get blueprintVersion() {
    return this.getStringAttribute('blueprint_version');
  }
  public set blueprintVersion(value: string) {
    this._blueprintVersion = value;
  }
  public resetBlueprintVersion() {
    this._blueprintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintVersionInput() {
    return this._blueprintVersion;
  }
}

export class BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprint[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintOutputReference {
    return new BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectCustomOutputConfigurationDocument {
  /**
  * fallback_blueprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#fallback_blueprint BedrockdataautomationProject#fallback_blueprint}
  */
  readonly fallbackBlueprint?: BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprint[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectCustomOutputConfigurationDocumentToTerraform(struct?: BedrockdataautomationProjectCustomOutputConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_blueprint: cdktn.listMapper(bedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintToTerraform, true)(struct!.fallbackBlueprint),
  }
}


export function bedrockdataautomationProjectCustomOutputConfigurationDocumentToHclTerraform(struct?: BedrockdataautomationProjectCustomOutputConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_blueprint: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintToHclTerraform, true)(struct!.fallbackBlueprint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectCustomOutputConfigurationDocumentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectCustomOutputConfigurationDocument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBlueprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBlueprint = this._fallbackBlueprint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectCustomOutputConfigurationDocument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBlueprint.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBlueprint.internalValue = value.fallbackBlueprint;
    }
  }

  // fallback_blueprint - computed: false, optional: true, required: false
  private _fallbackBlueprint = new BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprintList(this, "fallback_blueprint", false);
  public get fallbackBlueprint() {
    return this._fallbackBlueprint;
  }
  public putFallbackBlueprint(value: BedrockdataautomationProjectCustomOutputConfigurationDocumentFallbackBlueprint[] | cdktn.IResolvable) {
    this._fallbackBlueprint.internalValue = value;
  }
  public resetFallbackBlueprint() {
    this._fallbackBlueprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBlueprintInput() {
    return this._fallbackBlueprint.internalValue;
  }
}

export class BedrockdataautomationProjectCustomOutputConfigurationDocumentList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectCustomOutputConfigurationDocument[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectCustomOutputConfigurationDocumentOutputReference {
    return new BedrockdataautomationProjectCustomOutputConfigurationDocumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectCustomOutputConfiguration {
  /**
  * blueprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#blueprint BedrockdataautomationProject#blueprint}
  */
  readonly blueprint?: BedrockdataautomationProjectCustomOutputConfigurationBlueprint[] | cdktn.IResolvable;
  /**
  * document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#document BedrockdataautomationProject#document}
  */
  readonly document?: BedrockdataautomationProjectCustomOutputConfigurationDocument[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectCustomOutputConfigurationToTerraform(struct?: BedrockdataautomationProjectCustomOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blueprint: cdktn.listMapper(bedrockdataautomationProjectCustomOutputConfigurationBlueprintToTerraform, true)(struct!.blueprint),
    document: cdktn.listMapper(bedrockdataautomationProjectCustomOutputConfigurationDocumentToTerraform, true)(struct!.document),
  }
}


export function bedrockdataautomationProjectCustomOutputConfigurationToHclTerraform(struct?: BedrockdataautomationProjectCustomOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blueprint: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectCustomOutputConfigurationBlueprintToHclTerraform, true)(struct!.blueprint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectCustomOutputConfigurationBlueprintList",
    },
    document: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectCustomOutputConfigurationDocumentToHclTerraform, true)(struct!.document),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectCustomOutputConfigurationDocumentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectCustomOutputConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectCustomOutputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint?.internalValue;
    }
    if (this._document?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectCustomOutputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprint.internalValue = undefined;
      this._document.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprint.internalValue = value.blueprint;
      this._document.internalValue = value.document;
    }
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint = new BedrockdataautomationProjectCustomOutputConfigurationBlueprintList(this, "blueprint", false);
  public get blueprint() {
    return this._blueprint;
  }
  public putBlueprint(value: BedrockdataautomationProjectCustomOutputConfigurationBlueprint[] | cdktn.IResolvable) {
    this._blueprint.internalValue = value;
  }
  public resetBlueprint() {
    this._blueprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint.internalValue;
  }

  // document - computed: false, optional: true, required: false
  private _document = new BedrockdataautomationProjectCustomOutputConfigurationDocumentList(this, "document", false);
  public get document() {
    return this._document;
  }
  public putDocument(value: BedrockdataautomationProjectCustomOutputConfigurationDocument[] | cdktn.IResolvable) {
    this._document.internalValue = value;
  }
  public resetDocument() {
    this._document.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document.internalValue;
  }
}

export class BedrockdataautomationProjectCustomOutputConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectCustomOutputConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectCustomOutputConfigurationOutputReference {
    return new BedrockdataautomationProjectCustomOutputConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectDataAutomationLibraryConfigurationLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#library_arn BedrockdataautomationProject#library_arn}
  */
  readonly libraryArn: string;
}

export function bedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryToTerraform(struct?: BedrockdataautomationProjectDataAutomationLibraryConfigurationLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    library_arn: cdktn.stringToTerraform(struct!.libraryArn),
  }
}


export function bedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryToHclTerraform(struct?: BedrockdataautomationProjectDataAutomationLibraryConfigurationLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    library_arn: {
      value: cdktn.stringToHclTerraform(struct!.libraryArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectDataAutomationLibraryConfigurationLibrary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libraryArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryArn = this._libraryArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectDataAutomationLibraryConfigurationLibrary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._libraryArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._libraryArn = value.libraryArn;
    }
  }

  // library_arn - computed: false, optional: false, required: true
  private _libraryArn?: string; 
  public get libraryArn() {
    return this.getStringAttribute('library_arn');
  }
  public set libraryArn(value: string) {
    this._libraryArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryArnInput() {
    return this._libraryArn;
  }
}

export class BedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectDataAutomationLibraryConfigurationLibrary[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryOutputReference {
    return new BedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectDataAutomationLibraryConfiguration {
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#library BedrockdataautomationProject#library}
  */
  readonly library?: BedrockdataautomationProjectDataAutomationLibraryConfigurationLibrary[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectDataAutomationLibraryConfigurationToTerraform(struct?: BedrockdataautomationProjectDataAutomationLibraryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    library: cdktn.listMapper(bedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryToTerraform, true)(struct!.library),
  }
}


export function bedrockdataautomationProjectDataAutomationLibraryConfigurationToHclTerraform(struct?: BedrockdataautomationProjectDataAutomationLibraryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    library: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectDataAutomationLibraryConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectDataAutomationLibraryConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectDataAutomationLibraryConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._library.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._library.internalValue = value.library;
    }
  }

  // library - computed: false, optional: true, required: false
  private _library = new BedrockdataautomationProjectDataAutomationLibraryConfigurationLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: BedrockdataautomationProjectDataAutomationLibraryConfigurationLibrary[] | cdktn.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }
}

export class BedrockdataautomationProjectDataAutomationLibraryConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectDataAutomationLibraryConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectDataAutomationLibraryConfigurationOutputReference {
    return new BedrockdataautomationProjectDataAutomationLibraryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#kms_encryption_context BedrockdataautomationProject#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#kms_key_id BedrockdataautomationProject#kms_key_id}
  */
  readonly kmsKeyId: string;
}

export function bedrockdataautomationProjectEncryptionConfigurationToTerraform(struct?: BedrockdataautomationProjectEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.kmsEncryptionContext),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function bedrockdataautomationProjectEncryptionConfigurationToHclTerraform(struct?: BedrockdataautomationProjectEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_encryption_context: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.kmsEncryptionContext),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsEncryptionContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsEncryptionContext = this._kmsEncryptionContext;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsEncryptionContext = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsEncryptionContext = value.kmsEncryptionContext;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_encryption_context - computed: false, optional: true, required: false
  private _kmsEncryptionContext?: { [key: string]: string }; 
  public get kmsEncryptionContext() {
    return this.getStringMapAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: { [key: string]: string }) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext;
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}

export class BedrockdataautomationProjectEncryptionConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectEncryptionConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectEncryptionConfigurationOutputReference {
    return new BedrockdataautomationProjectEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#generative_output_language BedrockdataautomationProject#generative_output_language}
  */
  readonly generativeOutputLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#identify_multiple_languages BedrockdataautomationProject#identify_multiple_languages}
  */
  readonly identifyMultipleLanguages?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#input_languages BedrockdataautomationProject#input_languages}
  */
  readonly inputLanguages?: string[];
}

export function bedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    generative_output_language: cdktn.stringToTerraform(struct!.generativeOutputLanguage),
    identify_multiple_languages: cdktn.booleanToTerraform(struct!.identifyMultipleLanguages),
    input_languages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputLanguages),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    generative_output_language: {
      value: cdktn.stringToHclTerraform(struct!.generativeOutputLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identify_multiple_languages: {
      value: cdktn.booleanToHclTerraform(struct!.identifyMultipleLanguages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_languages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputLanguages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generativeOutputLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeOutputLanguage = this._generativeOutputLanguage;
    }
    if (this._identifyMultipleLanguages !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifyMultipleLanguages = this._identifyMultipleLanguages;
    }
    if (this._inputLanguages !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLanguages = this._inputLanguages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generativeOutputLanguage = undefined;
      this._identifyMultipleLanguages = undefined;
      this._inputLanguages = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generativeOutputLanguage = value.generativeOutputLanguage;
      this._identifyMultipleLanguages = value.identifyMultipleLanguages;
      this._inputLanguages = value.inputLanguages;
    }
  }

  // generative_output_language - computed: false, optional: true, required: false
  private _generativeOutputLanguage?: string; 
  public get generativeOutputLanguage() {
    return this.getStringAttribute('generative_output_language');
  }
  public set generativeOutputLanguage(value: string) {
    this._generativeOutputLanguage = value;
  }
  public resetGenerativeOutputLanguage() {
    this._generativeOutputLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeOutputLanguageInput() {
    return this._generativeOutputLanguage;
  }

  // identify_multiple_languages - computed: false, optional: true, required: false
  private _identifyMultipleLanguages?: boolean | cdktn.IResolvable; 
  public get identifyMultipleLanguages() {
    return this.getBooleanAttribute('identify_multiple_languages');
  }
  public set identifyMultipleLanguages(value: boolean | cdktn.IResolvable) {
    this._identifyMultipleLanguages = value;
  }
  public resetIdentifyMultipleLanguages() {
    this._identifyMultipleLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifyMultipleLanguagesInput() {
    return this._identifyMultipleLanguages;
  }

  // input_languages - computed: false, optional: true, required: false
  private _inputLanguages?: string[]; 
  public get inputLanguages() {
    return cdktn.Fn.tolist(this.getListAttribute('input_languages'));
  }
  public set inputLanguages(value: string[]) {
    this._inputLanguages = value;
  }
  public resetInputLanguages() {
    this._inputLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLanguagesInput() {
    return this._inputLanguages;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessing[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#pii_entity_types BedrockdataautomationProject#pii_entity_types}
  */
  readonly piiEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#redaction_mask_mode BedrockdataautomationProject#redaction_mask_mode}
  */
  readonly redactionMaskMode?: string;
}

export function bedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
    redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entity_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    redaction_mask_mode: {
      value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._redactionMaskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionMaskMode = this._redactionMaskMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntityTypes = undefined;
      this._redactionMaskMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntityTypes = value.piiEntityTypes;
      this._redactionMaskMode = value.redactionMaskMode;
    }
  }

  // pii_entity_types - computed: false, optional: true, required: false
  private _piiEntityTypes?: string[]; 
  public get piiEntityTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('pii_entity_types'));
  }
  public set piiEntityTypes(value: string[]) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // redaction_mask_mode - computed: false, optional: true, required: false
  private _redactionMaskMode?: string; 
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
  public set redactionMaskMode(value: string) {
    this._redactionMaskMode = value;
  }
  public resetRedactionMaskMode() {
    this._redactionMaskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionMaskModeInput() {
    return this._redactionMaskMode;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#detection_mode BedrockdataautomationProject#detection_mode}
  */
  readonly detectionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#detection_scope BedrockdataautomationProject#detection_scope}
  */
  readonly detectionScope?: string[];
  /**
  * pii_entities_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#pii_entities_configuration BedrockdataautomationProject#pii_entities_configuration}
  */
  readonly piiEntitiesConfiguration?: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
    detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
    pii_entities_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform, true)(struct!.piiEntitiesConfiguration),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detection_mode: {
      value: cdktn.stringToHclTerraform(struct!.detectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_scope: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pii_entities_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform, true)(struct!.piiEntitiesConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._detectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionScope = this._detectionScope;
    }
    if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionMode = undefined;
      this._detectionScope = undefined;
      this._piiEntitiesConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionMode = value.detectionMode;
      this._detectionScope = value.detectionScope;
      this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
    }
  }

  // detection_mode - computed: false, optional: false, required: true
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // detection_scope - computed: false, optional: true, required: false
  private _detectionScope?: string[]; 
  public get detectionScope() {
    return cdktn.Fn.tolist(this.getListAttribute('detection_scope'));
  }
  public set detectionScope(value: string[]) {
    this._detectionScope = value;
  }
  public resetDetectionScope() {
    this._detectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionScopeInput() {
    return this._detectionScope;
  }

  // pii_entities_configuration - computed: false, optional: true, required: false
  private _piiEntitiesConfiguration = new BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationList(this, "pii_entities_configuration", false);
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
  public putPiiEntitiesConfiguration(value: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable) {
    this._piiEntitiesConfiguration.internalValue = value;
  }
  public resetPiiEntitiesConfiguration() {
    this._piiEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigurationInput() {
    return this._piiEntitiesConfiguration.internalValue;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationAudio {
  /**
  * language_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#language_configuration BedrockdataautomationProject#language_configuration}
  */
  readonly languageConfiguration?: BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfiguration[] | cdktn.IResolvable;
  /**
  * modality_processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#modality_processing BedrockdataautomationProject#modality_processing}
  */
  readonly modalityProcessing?: BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessing[] | cdktn.IResolvable;
  /**
  * sensitive_data_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#sensitive_data_configuration BedrockdataautomationProject#sensitive_data_configuration}
  */
  readonly sensitiveDataConfiguration?: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfiguration[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectOverrideConfigurationAudioToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    language_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationToTerraform, true)(struct!.languageConfiguration),
    modality_processing: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingToTerraform, true)(struct!.modalityProcessing),
    sensitive_data_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToTerraform, true)(struct!.sensitiveDataConfiguration),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationAudioToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    language_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationToHclTerraform, true)(struct!.languageConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationList",
    },
    modality_processing: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingToHclTerraform, true)(struct!.modalityProcessing),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingList",
    },
    sensitive_data_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToHclTerraform, true)(struct!.sensitiveDataConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationAudioOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationAudio | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._languageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageConfiguration = this._languageConfiguration?.internalValue;
    }
    if (this._modalityProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
    }
    if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationAudio | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._languageConfiguration.internalValue = undefined;
      this._modalityProcessing.internalValue = undefined;
      this._sensitiveDataConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._languageConfiguration.internalValue = value.languageConfiguration;
      this._modalityProcessing.internalValue = value.modalityProcessing;
      this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
    }
  }

  // language_configuration - computed: false, optional: true, required: false
  private _languageConfiguration = new BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfigurationList(this, "language_configuration", false);
  public get languageConfiguration() {
    return this._languageConfiguration;
  }
  public putLanguageConfiguration(value: BedrockdataautomationProjectOverrideConfigurationAudioLanguageConfiguration[] | cdktn.IResolvable) {
    this._languageConfiguration.internalValue = value;
  }
  public resetLanguageConfiguration() {
    this._languageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageConfigurationInput() {
    return this._languageConfiguration.internalValue;
  }

  // modality_processing - computed: false, optional: true, required: false
  private _modalityProcessing = new BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessingList(this, "modality_processing", false);
  public get modalityProcessing() {
    return this._modalityProcessing;
  }
  public putModalityProcessing(value: BedrockdataautomationProjectOverrideConfigurationAudioModalityProcessing[] | cdktn.IResolvable) {
    this._modalityProcessing.internalValue = value;
  }
  public resetModalityProcessing() {
    this._modalityProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityProcessingInput() {
    return this._modalityProcessing.internalValue;
  }

  // sensitive_data_configuration - computed: false, optional: true, required: false
  private _sensitiveDataConfiguration = new BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfigurationList(this, "sensitive_data_configuration", false);
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
  public putSensitiveDataConfiguration(value: BedrockdataautomationProjectOverrideConfigurationAudioSensitiveDataConfiguration[] | cdktn.IResolvable) {
    this._sensitiveDataConfiguration.internalValue = value;
  }
  public resetSensitiveDataConfiguration() {
    this._sensitiveDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataConfigurationInput() {
    return this._sensitiveDataConfiguration.internalValue;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationAudioList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationAudio[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationAudioOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationAudioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessing[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#pii_entity_types BedrockdataautomationProject#pii_entity_types}
  */
  readonly piiEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#redaction_mask_mode BedrockdataautomationProject#redaction_mask_mode}
  */
  readonly redactionMaskMode?: string;
}

export function bedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
    redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entity_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    redaction_mask_mode: {
      value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._redactionMaskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionMaskMode = this._redactionMaskMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntityTypes = undefined;
      this._redactionMaskMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntityTypes = value.piiEntityTypes;
      this._redactionMaskMode = value.redactionMaskMode;
    }
  }

  // pii_entity_types - computed: false, optional: true, required: false
  private _piiEntityTypes?: string[]; 
  public get piiEntityTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('pii_entity_types'));
  }
  public set piiEntityTypes(value: string[]) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // redaction_mask_mode - computed: false, optional: true, required: false
  private _redactionMaskMode?: string; 
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
  public set redactionMaskMode(value: string) {
    this._redactionMaskMode = value;
  }
  public resetRedactionMaskMode() {
    this._redactionMaskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionMaskModeInput() {
    return this._redactionMaskMode;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#detection_mode BedrockdataautomationProject#detection_mode}
  */
  readonly detectionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#detection_scope BedrockdataautomationProject#detection_scope}
  */
  readonly detectionScope?: string[];
  /**
  * pii_entities_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#pii_entities_configuration BedrockdataautomationProject#pii_entities_configuration}
  */
  readonly piiEntitiesConfiguration?: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
    detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
    pii_entities_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform, true)(struct!.piiEntitiesConfiguration),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detection_mode: {
      value: cdktn.stringToHclTerraform(struct!.detectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_scope: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pii_entities_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform, true)(struct!.piiEntitiesConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._detectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionScope = this._detectionScope;
    }
    if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionMode = undefined;
      this._detectionScope = undefined;
      this._piiEntitiesConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionMode = value.detectionMode;
      this._detectionScope = value.detectionScope;
      this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
    }
  }

  // detection_mode - computed: false, optional: false, required: true
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // detection_scope - computed: false, optional: true, required: false
  private _detectionScope?: string[]; 
  public get detectionScope() {
    return cdktn.Fn.tolist(this.getListAttribute('detection_scope'));
  }
  public set detectionScope(value: string[]) {
    this._detectionScope = value;
  }
  public resetDetectionScope() {
    this._detectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionScopeInput() {
    return this._detectionScope;
  }

  // pii_entities_configuration - computed: false, optional: true, required: false
  private _piiEntitiesConfiguration = new BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationList(this, "pii_entities_configuration", false);
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
  public putPiiEntitiesConfiguration(value: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable) {
    this._piiEntitiesConfiguration.internalValue = value;
  }
  public resetPiiEntitiesConfiguration() {
    this._piiEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigurationInput() {
    return this._piiEntitiesConfiguration.internalValue;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationDocumentSplitter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectOverrideConfigurationDocumentSplitterToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocumentSplitter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationDocumentSplitterToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocumentSplitter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentSplitterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationDocumentSplitter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationDocumentSplitter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentSplitterList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationDocumentSplitter[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationDocumentSplitterOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationDocumentSplitterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationDocument {
  /**
  * modality_processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#modality_processing BedrockdataautomationProject#modality_processing}
  */
  readonly modalityProcessing?: BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessing[] | cdktn.IResolvable;
  /**
  * sensitive_data_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#sensitive_data_configuration BedrockdataautomationProject#sensitive_data_configuration}
  */
  readonly sensitiveDataConfiguration?: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration[] | cdktn.IResolvable;
  /**
  * splitter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#splitter BedrockdataautomationProject#splitter}
  */
  readonly splitter?: BedrockdataautomationProjectOverrideConfigurationDocumentSplitter[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectOverrideConfigurationDocumentToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    modality_processing: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingToTerraform, true)(struct!.modalityProcessing),
    sensitive_data_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToTerraform, true)(struct!.sensitiveDataConfiguration),
    splitter: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationDocumentSplitterToTerraform, true)(struct!.splitter),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationDocumentToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    modality_processing: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingToHclTerraform, true)(struct!.modalityProcessing),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingList",
    },
    sensitive_data_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToHclTerraform, true)(struct!.sensitiveDataConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationList",
    },
    splitter: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationDocumentSplitterToHclTerraform, true)(struct!.splitter),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationDocumentSplitterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationDocument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modalityProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
    }
    if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
    }
    if (this._splitter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitter = this._splitter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationDocument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = undefined;
      this._sensitiveDataConfiguration.internalValue = undefined;
      this._splitter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = value.modalityProcessing;
      this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
      this._splitter.internalValue = value.splitter;
    }
  }

  // modality_processing - computed: false, optional: true, required: false
  private _modalityProcessing = new BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessingList(this, "modality_processing", false);
  public get modalityProcessing() {
    return this._modalityProcessing;
  }
  public putModalityProcessing(value: BedrockdataautomationProjectOverrideConfigurationDocumentModalityProcessing[] | cdktn.IResolvable) {
    this._modalityProcessing.internalValue = value;
  }
  public resetModalityProcessing() {
    this._modalityProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityProcessingInput() {
    return this._modalityProcessing.internalValue;
  }

  // sensitive_data_configuration - computed: false, optional: true, required: false
  private _sensitiveDataConfiguration = new BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationList(this, "sensitive_data_configuration", false);
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
  public putSensitiveDataConfiguration(value: BedrockdataautomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration[] | cdktn.IResolvable) {
    this._sensitiveDataConfiguration.internalValue = value;
  }
  public resetSensitiveDataConfiguration() {
    this._sensitiveDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataConfigurationInput() {
    return this._sensitiveDataConfiguration.internalValue;
  }

  // splitter - computed: false, optional: true, required: false
  private _splitter = new BedrockdataautomationProjectOverrideConfigurationDocumentSplitterList(this, "splitter", false);
  public get splitter() {
    return this._splitter;
  }
  public putSplitter(value: BedrockdataautomationProjectOverrideConfigurationDocumentSplitter[] | cdktn.IResolvable) {
    this._splitter.internalValue = value;
  }
  public resetSplitter() {
    this._splitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitterInput() {
    return this._splitter.internalValue;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationDocumentList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationDocument[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationDocumentOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationDocumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationImageModalityProcessing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectOverrideConfigurationImageModalityProcessingToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationImageModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationImageModalityProcessingToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationImageModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationImageModalityProcessingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationImageModalityProcessing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationImageModalityProcessing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationImageModalityProcessingList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationImageModalityProcessing[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationImageModalityProcessingOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationImageModalityProcessingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#pii_entity_types BedrockdataautomationProject#pii_entity_types}
  */
  readonly piiEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#redaction_mask_mode BedrockdataautomationProject#redaction_mask_mode}
  */
  readonly redactionMaskMode?: string;
}

export function bedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
    redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entity_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    redaction_mask_mode: {
      value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._redactionMaskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionMaskMode = this._redactionMaskMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntityTypes = undefined;
      this._redactionMaskMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntityTypes = value.piiEntityTypes;
      this._redactionMaskMode = value.redactionMaskMode;
    }
  }

  // pii_entity_types - computed: false, optional: true, required: false
  private _piiEntityTypes?: string[]; 
  public get piiEntityTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('pii_entity_types'));
  }
  public set piiEntityTypes(value: string[]) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // redaction_mask_mode - computed: false, optional: true, required: false
  private _redactionMaskMode?: string; 
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
  public set redactionMaskMode(value: string) {
    this._redactionMaskMode = value;
  }
  public resetRedactionMaskMode() {
    this._redactionMaskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionMaskModeInput() {
    return this._redactionMaskMode;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#detection_mode BedrockdataautomationProject#detection_mode}
  */
  readonly detectionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#detection_scope BedrockdataautomationProject#detection_scope}
  */
  readonly detectionScope?: string[];
  /**
  * pii_entities_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#pii_entities_configuration BedrockdataautomationProject#pii_entities_configuration}
  */
  readonly piiEntitiesConfiguration?: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
    detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
    pii_entities_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform, true)(struct!.piiEntitiesConfiguration),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detection_mode: {
      value: cdktn.stringToHclTerraform(struct!.detectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_scope: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pii_entities_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform, true)(struct!.piiEntitiesConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._detectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionScope = this._detectionScope;
    }
    if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionMode = undefined;
      this._detectionScope = undefined;
      this._piiEntitiesConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionMode = value.detectionMode;
      this._detectionScope = value.detectionScope;
      this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
    }
  }

  // detection_mode - computed: false, optional: false, required: true
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // detection_scope - computed: false, optional: true, required: false
  private _detectionScope?: string[]; 
  public get detectionScope() {
    return cdktn.Fn.tolist(this.getListAttribute('detection_scope'));
  }
  public set detectionScope(value: string[]) {
    this._detectionScope = value;
  }
  public resetDetectionScope() {
    this._detectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionScopeInput() {
    return this._detectionScope;
  }

  // pii_entities_configuration - computed: false, optional: true, required: false
  private _piiEntitiesConfiguration = new BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationList(this, "pii_entities_configuration", false);
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
  public putPiiEntitiesConfiguration(value: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable) {
    this._piiEntitiesConfiguration.internalValue = value;
  }
  public resetPiiEntitiesConfiguration() {
    this._piiEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigurationInput() {
    return this._piiEntitiesConfiguration.internalValue;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationImage {
  /**
  * modality_processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#modality_processing BedrockdataautomationProject#modality_processing}
  */
  readonly modalityProcessing?: BedrockdataautomationProjectOverrideConfigurationImageModalityProcessing[] | cdktn.IResolvable;
  /**
  * sensitive_data_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#sensitive_data_configuration BedrockdataautomationProject#sensitive_data_configuration}
  */
  readonly sensitiveDataConfiguration?: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfiguration[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectOverrideConfigurationImageToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    modality_processing: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationImageModalityProcessingToTerraform, true)(struct!.modalityProcessing),
    sensitive_data_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationToTerraform, true)(struct!.sensitiveDataConfiguration),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationImageToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    modality_processing: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationImageModalityProcessingToHclTerraform, true)(struct!.modalityProcessing),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationImageModalityProcessingList",
    },
    sensitive_data_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationToHclTerraform, true)(struct!.sensitiveDataConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationImageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationImage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modalityProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
    }
    if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationImage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = undefined;
      this._sensitiveDataConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = value.modalityProcessing;
      this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
    }
  }

  // modality_processing - computed: false, optional: true, required: false
  private _modalityProcessing = new BedrockdataautomationProjectOverrideConfigurationImageModalityProcessingList(this, "modality_processing", false);
  public get modalityProcessing() {
    return this._modalityProcessing;
  }
  public putModalityProcessing(value: BedrockdataautomationProjectOverrideConfigurationImageModalityProcessing[] | cdktn.IResolvable) {
    this._modalityProcessing.internalValue = value;
  }
  public resetModalityProcessing() {
    this._modalityProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityProcessingInput() {
    return this._modalityProcessing.internalValue;
  }

  // sensitive_data_configuration - computed: false, optional: true, required: false
  private _sensitiveDataConfiguration = new BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfigurationList(this, "sensitive_data_configuration", false);
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
  public putSensitiveDataConfiguration(value: BedrockdataautomationProjectOverrideConfigurationImageSensitiveDataConfiguration[] | cdktn.IResolvable) {
    this._sensitiveDataConfiguration.internalValue = value;
  }
  public resetSensitiveDataConfiguration() {
    this._sensitiveDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataConfigurationInput() {
    return this._sensitiveDataConfiguration.internalValue;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationImageList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationImage[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationImageOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationModalityRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#jpeg BedrockdataautomationProject#jpeg}
  */
  readonly jpeg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#mov BedrockdataautomationProject#mov}
  */
  readonly mov?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#mp4 BedrockdataautomationProject#mp4}
  */
  readonly mp4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#png BedrockdataautomationProject#png}
  */
  readonly png?: string;
}

export function bedrockdataautomationProjectOverrideConfigurationModalityRoutingToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationModalityRouting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jpeg: cdktn.stringToTerraform(struct!.jpeg),
    mov: cdktn.stringToTerraform(struct!.mov),
    mp4: cdktn.stringToTerraform(struct!.mp4),
    png: cdktn.stringToTerraform(struct!.png),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationModalityRoutingToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationModalityRouting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    jpeg: {
      value: cdktn.stringToHclTerraform(struct!.jpeg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mov: {
      value: cdktn.stringToHclTerraform(struct!.mov),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mp4: {
      value: cdktn.stringToHclTerraform(struct!.mp4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    png: {
      value: cdktn.stringToHclTerraform(struct!.png),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationModalityRoutingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationModalityRouting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jpeg !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpeg = this._jpeg;
    }
    if (this._mov !== undefined) {
      hasAnyValues = true;
      internalValueResult.mov = this._mov;
    }
    if (this._mp4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.mp4 = this._mp4;
    }
    if (this._png !== undefined) {
      hasAnyValues = true;
      internalValueResult.png = this._png;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationModalityRouting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jpeg = undefined;
      this._mov = undefined;
      this._mp4 = undefined;
      this._png = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jpeg = value.jpeg;
      this._mov = value.mov;
      this._mp4 = value.mp4;
      this._png = value.png;
    }
  }

  // jpeg - computed: false, optional: true, required: false
  private _jpeg?: string; 
  public get jpeg() {
    return this.getStringAttribute('jpeg');
  }
  public set jpeg(value: string) {
    this._jpeg = value;
  }
  public resetJpeg() {
    this._jpeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpegInput() {
    return this._jpeg;
  }

  // mov - computed: false, optional: true, required: false
  private _mov?: string; 
  public get mov() {
    return this.getStringAttribute('mov');
  }
  public set mov(value: string) {
    this._mov = value;
  }
  public resetMov() {
    this._mov = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movInput() {
    return this._mov;
  }

  // mp4 - computed: false, optional: true, required: false
  private _mp4?: string; 
  public get mp4() {
    return this.getStringAttribute('mp4');
  }
  public set mp4(value: string) {
    this._mp4 = value;
  }
  public resetMp4() {
    this._mp4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mp4Input() {
    return this._mp4;
  }

  // png - computed: false, optional: true, required: false
  private _png?: string; 
  public get png() {
    return this.getStringAttribute('png');
  }
  public set png(value: string) {
    this._png = value;
  }
  public resetPng() {
    this._png = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pngInput() {
    return this._png;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationModalityRoutingList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationModalityRouting[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationModalityRoutingOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationModalityRoutingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessing[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#pii_entity_types BedrockdataautomationProject#pii_entity_types}
  */
  readonly piiEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#redaction_mask_mode BedrockdataautomationProject#redaction_mask_mode}
  */
  readonly redactionMaskMode?: string;
}

export function bedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
    redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entity_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    redaction_mask_mode: {
      value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._redactionMaskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionMaskMode = this._redactionMaskMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntityTypes = undefined;
      this._redactionMaskMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntityTypes = value.piiEntityTypes;
      this._redactionMaskMode = value.redactionMaskMode;
    }
  }

  // pii_entity_types - computed: false, optional: true, required: false
  private _piiEntityTypes?: string[]; 
  public get piiEntityTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('pii_entity_types'));
  }
  public set piiEntityTypes(value: string[]) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // redaction_mask_mode - computed: false, optional: true, required: false
  private _redactionMaskMode?: string; 
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
  public set redactionMaskMode(value: string) {
    this._redactionMaskMode = value;
  }
  public resetRedactionMaskMode() {
    this._redactionMaskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionMaskModeInput() {
    return this._redactionMaskMode;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#detection_mode BedrockdataautomationProject#detection_mode}
  */
  readonly detectionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#detection_scope BedrockdataautomationProject#detection_scope}
  */
  readonly detectionScope?: string[];
  /**
  * pii_entities_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#pii_entities_configuration BedrockdataautomationProject#pii_entities_configuration}
  */
  readonly piiEntitiesConfiguration?: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
    detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
    pii_entities_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform, true)(struct!.piiEntitiesConfiguration),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detection_mode: {
      value: cdktn.stringToHclTerraform(struct!.detectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_scope: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pii_entities_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform, true)(struct!.piiEntitiesConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._detectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionScope = this._detectionScope;
    }
    if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionMode = undefined;
      this._detectionScope = undefined;
      this._piiEntitiesConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionMode = value.detectionMode;
      this._detectionScope = value.detectionScope;
      this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
    }
  }

  // detection_mode - computed: false, optional: false, required: true
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // detection_scope - computed: false, optional: true, required: false
  private _detectionScope?: string[]; 
  public get detectionScope() {
    return cdktn.Fn.tolist(this.getListAttribute('detection_scope'));
  }
  public set detectionScope(value: string[]) {
    this._detectionScope = value;
  }
  public resetDetectionScope() {
    this._detectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionScopeInput() {
    return this._detectionScope;
  }

  // pii_entities_configuration - computed: false, optional: true, required: false
  private _piiEntitiesConfiguration = new BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationList(this, "pii_entities_configuration", false);
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
  public putPiiEntitiesConfiguration(value: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration[] | cdktn.IResolvable) {
    this._piiEntitiesConfiguration.internalValue = value;
  }
  public resetPiiEntitiesConfiguration() {
    this._piiEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigurationInput() {
    return this._piiEntitiesConfiguration.internalValue;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfigurationVideo {
  /**
  * modality_processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#modality_processing BedrockdataautomationProject#modality_processing}
  */
  readonly modalityProcessing?: BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessing[] | cdktn.IResolvable;
  /**
  * sensitive_data_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#sensitive_data_configuration BedrockdataautomationProject#sensitive_data_configuration}
  */
  readonly sensitiveDataConfiguration?: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfiguration[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectOverrideConfigurationVideoToTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    modality_processing: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingToTerraform, true)(struct!.modalityProcessing),
    sensitive_data_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToTerraform, true)(struct!.sensitiveDataConfiguration),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationVideoToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    modality_processing: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingToHclTerraform, true)(struct!.modalityProcessing),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingList",
    },
    sensitive_data_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToHclTerraform, true)(struct!.sensitiveDataConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationVideoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfigurationVideo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modalityProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
    }
    if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfigurationVideo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = undefined;
      this._sensitiveDataConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = value.modalityProcessing;
      this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
    }
  }

  // modality_processing - computed: false, optional: true, required: false
  private _modalityProcessing = new BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessingList(this, "modality_processing", false);
  public get modalityProcessing() {
    return this._modalityProcessing;
  }
  public putModalityProcessing(value: BedrockdataautomationProjectOverrideConfigurationVideoModalityProcessing[] | cdktn.IResolvable) {
    this._modalityProcessing.internalValue = value;
  }
  public resetModalityProcessing() {
    this._modalityProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityProcessingInput() {
    return this._modalityProcessing.internalValue;
  }

  // sensitive_data_configuration - computed: false, optional: true, required: false
  private _sensitiveDataConfiguration = new BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfigurationList(this, "sensitive_data_configuration", false);
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
  public putSensitiveDataConfiguration(value: BedrockdataautomationProjectOverrideConfigurationVideoSensitiveDataConfiguration[] | cdktn.IResolvable) {
    this._sensitiveDataConfiguration.internalValue = value;
  }
  public resetSensitiveDataConfiguration() {
    this._sensitiveDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataConfigurationInput() {
    return this._sensitiveDataConfiguration.internalValue;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationVideoList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfigurationVideo[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationVideoOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationVideoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectOverrideConfiguration {
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#audio BedrockdataautomationProject#audio}
  */
  readonly audio?: BedrockdataautomationProjectOverrideConfigurationAudio[] | cdktn.IResolvable;
  /**
  * document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#document BedrockdataautomationProject#document}
  */
  readonly document?: BedrockdataautomationProjectOverrideConfigurationDocument[] | cdktn.IResolvable;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#image BedrockdataautomationProject#image}
  */
  readonly image?: BedrockdataautomationProjectOverrideConfigurationImage[] | cdktn.IResolvable;
  /**
  * modality_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#modality_routing BedrockdataautomationProject#modality_routing}
  */
  readonly modalityRouting?: BedrockdataautomationProjectOverrideConfigurationModalityRouting[] | cdktn.IResolvable;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#video BedrockdataautomationProject#video}
  */
  readonly video?: BedrockdataautomationProjectOverrideConfigurationVideo[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectOverrideConfigurationToTerraform(struct?: BedrockdataautomationProjectOverrideConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationAudioToTerraform, true)(struct!.audio),
    document: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationDocumentToTerraform, true)(struct!.document),
    image: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationImageToTerraform, true)(struct!.image),
    modality_routing: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationModalityRoutingToTerraform, true)(struct!.modalityRouting),
    video: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationVideoToTerraform, true)(struct!.video),
  }
}


export function bedrockdataautomationProjectOverrideConfigurationToHclTerraform(struct?: BedrockdataautomationProjectOverrideConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationAudioToHclTerraform, true)(struct!.audio),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationAudioList",
    },
    document: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationDocumentToHclTerraform, true)(struct!.document),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationDocumentList",
    },
    image: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationImageToHclTerraform, true)(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationImageList",
    },
    modality_routing: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationModalityRoutingToHclTerraform, true)(struct!.modalityRouting),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationModalityRoutingList",
    },
    video: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationVideoToHclTerraform, true)(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectOverrideConfigurationVideoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectOverrideConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectOverrideConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio?.internalValue;
    }
    if (this._document?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._modalityRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityRouting = this._modalityRouting?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectOverrideConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audio.internalValue = undefined;
      this._document.internalValue = undefined;
      this._image.internalValue = undefined;
      this._modalityRouting.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audio.internalValue = value.audio;
      this._document.internalValue = value.document;
      this._image.internalValue = value.image;
      this._modalityRouting.internalValue = value.modalityRouting;
      this._video.internalValue = value.video;
    }
  }

  // audio - computed: false, optional: true, required: false
  private _audio = new BedrockdataautomationProjectOverrideConfigurationAudioList(this, "audio", false);
  public get audio() {
    return this._audio;
  }
  public putAudio(value: BedrockdataautomationProjectOverrideConfigurationAudio[] | cdktn.IResolvable) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // document - computed: false, optional: true, required: false
  private _document = new BedrockdataautomationProjectOverrideConfigurationDocumentList(this, "document", false);
  public get document() {
    return this._document;
  }
  public putDocument(value: BedrockdataautomationProjectOverrideConfigurationDocument[] | cdktn.IResolvable) {
    this._document.internalValue = value;
  }
  public resetDocument() {
    this._document.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new BedrockdataautomationProjectOverrideConfigurationImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: BedrockdataautomationProjectOverrideConfigurationImage[] | cdktn.IResolvable) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // modality_routing - computed: false, optional: true, required: false
  private _modalityRouting = new BedrockdataautomationProjectOverrideConfigurationModalityRoutingList(this, "modality_routing", false);
  public get modalityRouting() {
    return this._modalityRouting;
  }
  public putModalityRouting(value: BedrockdataautomationProjectOverrideConfigurationModalityRouting[] | cdktn.IResolvable) {
    this._modalityRouting.internalValue = value;
  }
  public resetModalityRouting() {
    this._modalityRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityRoutingInput() {
    return this._modalityRouting.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new BedrockdataautomationProjectOverrideConfigurationVideoList(this, "video", false);
  public get video() {
    return this._video;
  }
  public putVideo(value: BedrockdataautomationProjectOverrideConfigurationVideo[] | cdktn.IResolvable) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class BedrockdataautomationProjectOverrideConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectOverrideConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectOverrideConfigurationOutputReference {
    return new BedrockdataautomationProjectOverrideConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript {
  /**
  * channel_labeling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#channel_labeling BedrockdataautomationProject#channel_labeling}
  */
  readonly channelLabeling?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling[] | cdktn.IResolvable;
  /**
  * speaker_labeling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#speaker_labeling BedrockdataautomationProject#speaker_labeling}
  */
  readonly speakerLabeling?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_labeling: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToTerraform, true)(struct!.channelLabeling),
    speaker_labeling: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToTerraform, true)(struct!.speakerLabeling),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_labeling: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToHclTerraform, true)(struct!.channelLabeling),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingList",
    },
    speaker_labeling: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToHclTerraform, true)(struct!.speakerLabeling),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelLabeling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelLabeling = this._channelLabeling?.internalValue;
    }
    if (this._speakerLabeling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakerLabeling = this._speakerLabeling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelLabeling.internalValue = undefined;
      this._speakerLabeling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelLabeling.internalValue = value.channelLabeling;
      this._speakerLabeling.internalValue = value.speakerLabeling;
    }
  }

  // channel_labeling - computed: false, optional: true, required: false
  private _channelLabeling = new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingList(this, "channel_labeling", false);
  public get channelLabeling() {
    return this._channelLabeling;
  }
  public putChannelLabeling(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling[] | cdktn.IResolvable) {
    this._channelLabeling.internalValue = value;
  }
  public resetChannelLabeling() {
    this._channelLabeling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelLabelingInput() {
    return this._channelLabeling.internalValue;
  }

  // speaker_labeling - computed: false, optional: true, required: false
  private _speakerLabeling = new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingList(this, "speaker_labeling", false);
  public get speakerLabeling() {
    return this._speakerLabeling;
  }
  public putSpeakerLabeling(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling[] | cdktn.IResolvable) {
    this._speakerLabeling.internalValue = value;
  }
  public resetSpeakerLabeling() {
    this._speakerLabeling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakerLabelingInput() {
    return this._speakerLabeling.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration {
  /**
  * transcript block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#transcript BedrockdataautomationProject#transcript}
  */
  readonly transcript?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transcript: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToTerraform, true)(struct!.transcript),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transcript: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToHclTerraform, true)(struct!.transcript),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transcript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcript = this._transcript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transcript.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transcript.internalValue = value.transcript;
    }
  }

  // transcript - computed: false, optional: true, required: false
  private _transcript = new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptList(this, "transcript", false);
  public get transcript() {
    return this._transcript;
  }
  public putTranscript(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript[] | cdktn.IResolvable) {
    this._transcript.internalValue = value;
  }
  public resetTranscript() {
    this._transcript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptInput() {
    return this._transcript.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#types BedrockdataautomationProject#types}
  */
  readonly types?: string[];
  /**
  * type_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#type_configuration BedrockdataautomationProject#type_configuration}
  */
  readonly typeConfiguration?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
    type_configuration: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToTerraform, true)(struct!.typeConfiguration),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type_configuration: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToHclTerraform, true)(struct!.typeConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._typeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeConfiguration = this._typeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
      this._typeConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
      this._typeConfiguration.internalValue = value.typeConfiguration;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // type_configuration - computed: false, optional: true, required: false
  private _typeConfiguration = new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationList(this, "type_configuration", false);
  public get typeConfiguration() {
    return this._typeConfiguration;
  }
  public putTypeConfiguration(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration[] | cdktn.IResolvable) {
    this._typeConfiguration.internalValue = value;
  }
  public resetTypeConfiguration() {
    this._typeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeConfigurationInput() {
    return this._typeConfiguration.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategory[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationAudioExtraction {
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#category BedrockdataautomationProject#category}
  */
  readonly category?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategory[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryToTerraform, true)(struct!.category),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryToHclTerraform, true)(struct!.category),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationAudioExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category.internalValue = value.category;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category = new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionCategory[] | cdktn.IResolvable) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationAudioExtraction[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#types BedrockdataautomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeField[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationAudio {
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#extraction BedrockdataautomationProject#extraction}
  */
  readonly extraction?: BedrockdataautomationProjectStandardOutputConfigurationAudioExtraction[] | cdktn.IResolvable;
  /**
  * generative_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#generative_field BedrockdataautomationProject#generative_field}
  */
  readonly generativeField?: BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeField[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationAudioToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionToTerraform, true)(struct!.extraction),
    generative_field: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldToTerraform, true)(struct!.generativeField),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationAudioToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationAudioExtractionToHclTerraform, true)(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionList",
    },
    generative_field: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldToHclTerraform, true)(struct!.generativeField),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationAudio | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._generativeField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeField = this._generativeField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationAudio | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraction.internalValue = undefined;
      this._generativeField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraction.internalValue = value.extraction;
      this._generativeField.internalValue = value.generativeField;
    }
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new BedrockdataautomationProjectStandardOutputConfigurationAudioExtractionList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockdataautomationProjectStandardOutputConfigurationAudioExtraction[] | cdktn.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // generative_field - computed: false, optional: true, required: false
  private _generativeField = new BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeFieldList(this, "generative_field", false);
  public get generativeField() {
    return this._generativeField;
  }
  public putGenerativeField(value: BedrockdataautomationProjectStandardOutputConfigurationAudioGenerativeField[] | cdktn.IResolvable) {
    this._generativeField.internalValue = value;
  }
  public resetGenerativeField() {
    this._generativeField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeFieldInput() {
    return this._generativeField.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationAudioList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationAudio[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationAudioOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationAudioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#types BedrockdataautomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._types = value.types;
    }
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularity[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationDocumentExtraction {
  /**
  * bounding_box block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#bounding_box BedrockdataautomationProject#bounding_box}
  */
  readonly boundingBox?: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox[] | cdktn.IResolvable;
  /**
  * granularity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#granularity BedrockdataautomationProject#granularity}
  */
  readonly granularity?: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularity[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bounding_box: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToTerraform, true)(struct!.boundingBox),
    granularity: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityToTerraform, true)(struct!.granularity),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bounding_box: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToHclTerraform, true)(struct!.boundingBox),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxList",
    },
    granularity: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityToHclTerraform, true)(struct!.granularity),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationDocumentExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundingBox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundingBox = this._boundingBox?.internalValue;
    }
    if (this._granularity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = undefined;
      this._granularity.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = value.boundingBox;
      this._granularity.internalValue = value.granularity;
    }
  }

  // bounding_box - computed: false, optional: true, required: false
  private _boundingBox = new BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxList(this, "bounding_box", false);
  public get boundingBox() {
    return this._boundingBox;
  }
  public putBoundingBox(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox[] | cdktn.IResolvable) {
    this._boundingBox.internalValue = value;
  }
  public resetBoundingBox() {
    this._boundingBox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundingBoxInput() {
    return this._boundingBox.internalValue;
  }

  // granularity - computed: false, optional: true, required: false
  private _granularity = new BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularityList(this, "granularity", false);
  public get granularity() {
    return this._granularity;
  }
  public putGranularity(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionGranularity[] | cdktn.IResolvable) {
    this._granularity.internalValue = value;
  }
  public resetGranularity() {
    this._granularity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationDocumentExtraction[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeField[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#types BedrockdataautomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._types = value.types;
    }
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormat {
  /**
  * additional_file_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#additional_file_format BedrockdataautomationProject#additional_file_format}
  */
  readonly additionalFileFormat?: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat[] | cdktn.IResolvable;
  /**
  * text_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#text_format BedrockdataautomationProject#text_format}
  */
  readonly textFormat?: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_file_format: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToTerraform, true)(struct!.additionalFileFormat),
    text_format: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToTerraform, true)(struct!.textFormat),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_file_format: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToHclTerraform, true)(struct!.additionalFileFormat),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatList",
    },
    text_format: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToHclTerraform, true)(struct!.textFormat),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalFileFormat = this._additionalFileFormat?.internalValue;
    }
    if (this._textFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormat = this._textFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalFileFormat.internalValue = undefined;
      this._textFormat.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalFileFormat.internalValue = value.additionalFileFormat;
      this._textFormat.internalValue = value.textFormat;
    }
  }

  // additional_file_format - computed: false, optional: true, required: false
  private _additionalFileFormat = new BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatList(this, "additional_file_format", false);
  public get additionalFileFormat() {
    return this._additionalFileFormat;
  }
  public putAdditionalFileFormat(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat[] | cdktn.IResolvable) {
    this._additionalFileFormat.internalValue = value;
  }
  public resetAdditionalFileFormat() {
    this._additionalFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalFileFormatInput() {
    return this._additionalFileFormat.internalValue;
  }

  // text_format - computed: false, optional: true, required: false
  private _textFormat = new BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatList(this, "text_format", false);
  public get textFormat() {
    return this._textFormat;
  }
  public putTextFormat(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat[] | cdktn.IResolvable) {
    this._textFormat.internalValue = value;
  }
  public resetTextFormat() {
    this._textFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatInput() {
    return this._textFormat.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormat[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationDocument {
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#extraction BedrockdataautomationProject#extraction}
  */
  readonly extraction?: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtraction[] | cdktn.IResolvable;
  /**
  * generative_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#generative_field BedrockdataautomationProject#generative_field}
  */
  readonly generativeField?: BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeField[] | cdktn.IResolvable;
  /**
  * output_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#output_format BedrockdataautomationProject#output_format}
  */
  readonly outputFormat?: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormat[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationDocumentToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionToTerraform, true)(struct!.extraction),
    generative_field: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldToTerraform, true)(struct!.generativeField),
    output_format: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatToTerraform, true)(struct!.outputFormat),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationDocumentToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionToHclTerraform, true)(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionList",
    },
    generative_field: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldToHclTerraform, true)(struct!.generativeField),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldList",
    },
    output_format: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatToHclTerraform, true)(struct!.outputFormat),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationDocument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._generativeField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeField = this._generativeField?.internalValue;
    }
    if (this._outputFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationDocument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraction.internalValue = undefined;
      this._generativeField.internalValue = undefined;
      this._outputFormat.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraction.internalValue = value.extraction;
      this._generativeField.internalValue = value.generativeField;
      this._outputFormat.internalValue = value.outputFormat;
    }
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new BedrockdataautomationProjectStandardOutputConfigurationDocumentExtractionList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentExtraction[] | cdktn.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // generative_field - computed: false, optional: true, required: false
  private _generativeField = new BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeFieldList(this, "generative_field", false);
  public get generativeField() {
    return this._generativeField;
  }
  public putGenerativeField(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentGenerativeField[] | cdktn.IResolvable) {
    this._generativeField.internalValue = value;
  }
  public resetGenerativeField() {
    this._generativeField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeFieldInput() {
    return this._generativeField.internalValue;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat = new BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormatList(this, "output_format", false);
  public get outputFormat() {
    return this._outputFormat;
  }
  public putOutputFormat(value: BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputFormat[] | cdktn.IResolvable) {
    this._outputFormat.internalValue = value;
  }
  public resetOutputFormat() {
    this._outputFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationDocumentList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationDocument[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationDocumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBox {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBox | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBox | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBox[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#types BedrockdataautomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategory[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationImageExtraction {
  /**
  * bounding_box block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#bounding_box BedrockdataautomationProject#bounding_box}
  */
  readonly boundingBox?: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBox[] | cdktn.IResolvable;
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#category BedrockdataautomationProject#category}
  */
  readonly category?: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategory[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationImageExtractionToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImageExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bounding_box: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToTerraform, true)(struct!.boundingBox),
    category: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryToTerraform, true)(struct!.category),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationImageExtractionToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImageExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bounding_box: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToHclTerraform, true)(struct!.boundingBox),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxList",
    },
    category: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryToHclTerraform, true)(struct!.category),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageExtractionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationImageExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundingBox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundingBox = this._boundingBox?.internalValue;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationImageExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = value.boundingBox;
      this._category.internalValue = value.category;
    }
  }

  // bounding_box - computed: false, optional: true, required: false
  private _boundingBox = new BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBoxList(this, "bounding_box", false);
  public get boundingBox() {
    return this._boundingBox;
  }
  public putBoundingBox(value: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionBoundingBox[] | cdktn.IResolvable) {
    this._boundingBox.internalValue = value;
  }
  public resetBoundingBox() {
    this._boundingBox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundingBoxInput() {
    return this._boundingBox.internalValue;
  }

  // category - computed: false, optional: true, required: false
  private _category = new BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: BedrockdataautomationProjectStandardOutputConfigurationImageExtractionCategory[] | cdktn.IResolvable) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageExtractionList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationImageExtraction[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationImageExtractionOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationImageExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#types BedrockdataautomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeField[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationImage {
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#extraction BedrockdataautomationProject#extraction}
  */
  readonly extraction?: BedrockdataautomationProjectStandardOutputConfigurationImageExtraction[] | cdktn.IResolvable;
  /**
  * generative_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#generative_field BedrockdataautomationProject#generative_field}
  */
  readonly generativeField?: BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeField[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationImageToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationImageExtractionToTerraform, true)(struct!.extraction),
    generative_field: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldToTerraform, true)(struct!.generativeField),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationImageToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationImageExtractionToHclTerraform, true)(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationImageExtractionList",
    },
    generative_field: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldToHclTerraform, true)(struct!.generativeField),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationImage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._generativeField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeField = this._generativeField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationImage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraction.internalValue = undefined;
      this._generativeField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraction.internalValue = value.extraction;
      this._generativeField.internalValue = value.generativeField;
    }
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new BedrockdataautomationProjectStandardOutputConfigurationImageExtractionList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockdataautomationProjectStandardOutputConfigurationImageExtraction[] | cdktn.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // generative_field - computed: false, optional: true, required: false
  private _generativeField = new BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeFieldList(this, "generative_field", false);
  public get generativeField() {
    return this._generativeField;
  }
  public putGenerativeField(value: BedrockdataautomationProjectStandardOutputConfigurationImageGenerativeField[] | cdktn.IResolvable) {
    this._generativeField.internalValue = value;
  }
  public resetGenerativeField() {
    this._generativeField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeFieldInput() {
    return this._generativeField.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationImageList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationImage[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationImageOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBox {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
}

export function bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBox[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#types BedrockdataautomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategory[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationVideoExtraction {
  /**
  * bounding_box block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#bounding_box BedrockdataautomationProject#bounding_box}
  */
  readonly boundingBox?: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBox[] | cdktn.IResolvable;
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#category BedrockdataautomationProject#category}
  */
  readonly category?: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategory[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideoExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bounding_box: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToTerraform, true)(struct!.boundingBox),
    category: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryToTerraform, true)(struct!.category),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideoExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bounding_box: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToHclTerraform, true)(struct!.boundingBox),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxList",
    },
    category: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryToHclTerraform, true)(struct!.category),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationVideoExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundingBox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundingBox = this._boundingBox?.internalValue;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationVideoExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = value.boundingBox;
      this._category.internalValue = value.category;
    }
  }

  // bounding_box - computed: false, optional: true, required: false
  private _boundingBox = new BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxList(this, "bounding_box", false);
  public get boundingBox() {
    return this._boundingBox;
  }
  public putBoundingBox(value: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionBoundingBox[] | cdktn.IResolvable) {
    this._boundingBox.internalValue = value;
  }
  public resetBoundingBox() {
    this._boundingBox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundingBoxInput() {
    return this._boundingBox.internalValue;
  }

  // category - computed: false, optional: true, required: false
  private _category = new BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionCategory[] | cdktn.IResolvable) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationVideoExtraction[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#state BedrockdataautomationProject#state}
  */
  readonly state: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#types BedrockdataautomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktn.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeField[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfigurationVideo {
  /**
  * extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#extraction BedrockdataautomationProject#extraction}
  */
  readonly extraction?: BedrockdataautomationProjectStandardOutputConfigurationVideoExtraction[] | cdktn.IResolvable;
  /**
  * generative_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#generative_field BedrockdataautomationProject#generative_field}
  */
  readonly generativeField?: BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeField[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationVideoToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionToTerraform, true)(struct!.extraction),
    generative_field: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldToTerraform, true)(struct!.generativeField),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationVideoToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationVideoExtractionToHclTerraform, true)(struct!.extraction),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionList",
    },
    generative_field: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldToHclTerraform, true)(struct!.generativeField),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfigurationVideo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._generativeField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeField = this._generativeField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfigurationVideo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraction.internalValue = undefined;
      this._generativeField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraction.internalValue = value.extraction;
      this._generativeField.internalValue = value.generativeField;
    }
  }

  // extraction - computed: false, optional: true, required: false
  private _extraction = new BedrockdataautomationProjectStandardOutputConfigurationVideoExtractionList(this, "extraction", false);
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockdataautomationProjectStandardOutputConfigurationVideoExtraction[] | cdktn.IResolvable) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // generative_field - computed: false, optional: true, required: false
  private _generativeField = new BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeFieldList(this, "generative_field", false);
  public get generativeField() {
    return this._generativeField;
  }
  public putGenerativeField(value: BedrockdataautomationProjectStandardOutputConfigurationVideoGenerativeField[] | cdktn.IResolvable) {
    this._generativeField.internalValue = value;
  }
  public resetGenerativeField() {
    this._generativeField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeFieldInput() {
    return this._generativeField.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationVideoList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfigurationVideo[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationVideoOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationVideoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectStandardOutputConfiguration {
  /**
  * audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#audio BedrockdataautomationProject#audio}
  */
  readonly audio?: BedrockdataautomationProjectStandardOutputConfigurationAudio[] | cdktn.IResolvable;
  /**
  * document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#document BedrockdataautomationProject#document}
  */
  readonly document?: BedrockdataautomationProjectStandardOutputConfigurationDocument[] | cdktn.IResolvable;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#image BedrockdataautomationProject#image}
  */
  readonly image?: BedrockdataautomationProjectStandardOutputConfigurationImage[] | cdktn.IResolvable;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#video BedrockdataautomationProject#video}
  */
  readonly video?: BedrockdataautomationProjectStandardOutputConfigurationVideo[] | cdktn.IResolvable;
}

export function bedrockdataautomationProjectStandardOutputConfigurationToTerraform(struct?: BedrockdataautomationProjectStandardOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationAudioToTerraform, true)(struct!.audio),
    document: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationDocumentToTerraform, true)(struct!.document),
    image: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationImageToTerraform, true)(struct!.image),
    video: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationVideoToTerraform, true)(struct!.video),
  }
}


export function bedrockdataautomationProjectStandardOutputConfigurationToHclTerraform(struct?: BedrockdataautomationProjectStandardOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationAudioToHclTerraform, true)(struct!.audio),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationAudioList",
    },
    document: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationDocumentToHclTerraform, true)(struct!.document),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationDocumentList",
    },
    image: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationImageToHclTerraform, true)(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationImageList",
    },
    video: {
      value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationVideoToHclTerraform, true)(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationVideoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockdataautomationProjectStandardOutputConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockdataautomationProjectStandardOutputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio?.internalValue;
    }
    if (this._document?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockdataautomationProjectStandardOutputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audio.internalValue = undefined;
      this._document.internalValue = undefined;
      this._image.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audio.internalValue = value.audio;
      this._document.internalValue = value.document;
      this._image.internalValue = value.image;
      this._video.internalValue = value.video;
    }
  }

  // audio - computed: false, optional: true, required: false
  private _audio = new BedrockdataautomationProjectStandardOutputConfigurationAudioList(this, "audio", false);
  public get audio() {
    return this._audio;
  }
  public putAudio(value: BedrockdataautomationProjectStandardOutputConfigurationAudio[] | cdktn.IResolvable) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // document - computed: false, optional: true, required: false
  private _document = new BedrockdataautomationProjectStandardOutputConfigurationDocumentList(this, "document", false);
  public get document() {
    return this._document;
  }
  public putDocument(value: BedrockdataautomationProjectStandardOutputConfigurationDocument[] | cdktn.IResolvable) {
    this._document.internalValue = value;
  }
  public resetDocument() {
    this._document.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new BedrockdataautomationProjectStandardOutputConfigurationImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: BedrockdataautomationProjectStandardOutputConfigurationImage[] | cdktn.IResolvable) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new BedrockdataautomationProjectStandardOutputConfigurationVideoList(this, "video", false);
  public get video() {
    return this._video;
  }
  public putVideo(value: BedrockdataautomationProjectStandardOutputConfigurationVideo[] | cdktn.IResolvable) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class BedrockdataautomationProjectStandardOutputConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockdataautomationProjectStandardOutputConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockdataautomationProjectStandardOutputConfigurationOutputReference {
    return new BedrockdataautomationProjectStandardOutputConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockdataautomationProjectTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#create BedrockdataautomationProject#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#delete BedrockdataautomationProject#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#update BedrockdataautomationProject#update}
  */
  readonly update?: string;
}

export function bedrockdataautomationProjectTimeoutsToTerraform(struct?: BedrockdataautomationProjectTimeouts | cdktn.IResolvable): any {
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


export function bedrockdataautomationProjectTimeoutsToHclTerraform(struct?: BedrockdataautomationProjectTimeouts | cdktn.IResolvable): any {
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

export class BedrockdataautomationProjectTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockdataautomationProjectTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockdataautomationProjectTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project aws_bedrockdataautomation_project}
*/
export class BedrockdataautomationProject extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockdataautomation_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockdataautomationProject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockdataautomationProject to import
  * @param importFromId The id of the existing BedrockdataautomationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockdataautomationProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockdataautomation_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/bedrockdataautomation_project aws_bedrockdataautomation_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockdataautomationProjectConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockdataautomationProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockdataautomation_project',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.73.0',
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
    this._description = config.description;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._type = config.type;
    this._customOutputConfiguration.internalValue = config.customOutputConfiguration;
    this._dataAutomationLibraryConfiguration.internalValue = config.dataAutomationLibraryConfiguration;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._overrideConfiguration.internalValue = config.overrideConfiguration;
    this._standardOutputConfiguration.internalValue = config.standardOutputConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // project_stage - computed: true, optional: false, required: false
  public get projectStage() {
    return this.getStringAttribute('project_stage');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // custom_output_configuration - computed: false, optional: true, required: false
  private _customOutputConfiguration = new BedrockdataautomationProjectCustomOutputConfigurationList(this, "custom_output_configuration", false);
  public get customOutputConfiguration() {
    return this._customOutputConfiguration;
  }
  public putCustomOutputConfiguration(value: BedrockdataautomationProjectCustomOutputConfiguration[] | cdktn.IResolvable) {
    this._customOutputConfiguration.internalValue = value;
  }
  public resetCustomOutputConfiguration() {
    this._customOutputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOutputConfigurationInput() {
    return this._customOutputConfiguration.internalValue;
  }

  // data_automation_library_configuration - computed: false, optional: true, required: false
  private _dataAutomationLibraryConfiguration = new BedrockdataautomationProjectDataAutomationLibraryConfigurationList(this, "data_automation_library_configuration", false);
  public get dataAutomationLibraryConfiguration() {
    return this._dataAutomationLibraryConfiguration;
  }
  public putDataAutomationLibraryConfiguration(value: BedrockdataautomationProjectDataAutomationLibraryConfiguration[] | cdktn.IResolvable) {
    this._dataAutomationLibraryConfiguration.internalValue = value;
  }
  public resetDataAutomationLibraryConfiguration() {
    this._dataAutomationLibraryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAutomationLibraryConfigurationInput() {
    return this._dataAutomationLibraryConfiguration.internalValue;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new BedrockdataautomationProjectEncryptionConfigurationList(this, "encryption_configuration", false);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: BedrockdataautomationProjectEncryptionConfiguration[] | cdktn.IResolvable) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // override_configuration - computed: false, optional: true, required: false
  private _overrideConfiguration = new BedrockdataautomationProjectOverrideConfigurationList(this, "override_configuration", false);
  public get overrideConfiguration() {
    return this._overrideConfiguration;
  }
  public putOverrideConfiguration(value: BedrockdataautomationProjectOverrideConfiguration[] | cdktn.IResolvable) {
    this._overrideConfiguration.internalValue = value;
  }
  public resetOverrideConfiguration() {
    this._overrideConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideConfigurationInput() {
    return this._overrideConfiguration.internalValue;
  }

  // standard_output_configuration - computed: false, optional: true, required: false
  private _standardOutputConfiguration = new BedrockdataautomationProjectStandardOutputConfigurationList(this, "standard_output_configuration", false);
  public get standardOutputConfiguration() {
    return this._standardOutputConfiguration;
  }
  public putStandardOutputConfiguration(value: BedrockdataautomationProjectStandardOutputConfiguration[] | cdktn.IResolvable) {
    this._standardOutputConfiguration.internalValue = value;
  }
  public resetStandardOutputConfiguration() {
    this._standardOutputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardOutputConfigurationInput() {
    return this._standardOutputConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockdataautomationProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockdataautomationProjectTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      type: cdktn.stringToTerraform(this._type),
      custom_output_configuration: cdktn.listMapper(bedrockdataautomationProjectCustomOutputConfigurationToTerraform, true)(this._customOutputConfiguration.internalValue),
      data_automation_library_configuration: cdktn.listMapper(bedrockdataautomationProjectDataAutomationLibraryConfigurationToTerraform, true)(this._dataAutomationLibraryConfiguration.internalValue),
      encryption_configuration: cdktn.listMapper(bedrockdataautomationProjectEncryptionConfigurationToTerraform, true)(this._encryptionConfiguration.internalValue),
      override_configuration: cdktn.listMapper(bedrockdataautomationProjectOverrideConfigurationToTerraform, true)(this._overrideConfiguration.internalValue),
      standard_output_configuration: cdktn.listMapper(bedrockdataautomationProjectStandardOutputConfigurationToTerraform, true)(this._standardOutputConfiguration.internalValue),
      timeouts: bedrockdataautomationProjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_output_configuration: {
        value: cdktn.listMapperHcl(bedrockdataautomationProjectCustomOutputConfigurationToHclTerraform, true)(this._customOutputConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockdataautomationProjectCustomOutputConfigurationList",
      },
      data_automation_library_configuration: {
        value: cdktn.listMapperHcl(bedrockdataautomationProjectDataAutomationLibraryConfigurationToHclTerraform, true)(this._dataAutomationLibraryConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockdataautomationProjectDataAutomationLibraryConfigurationList",
      },
      encryption_configuration: {
        value: cdktn.listMapperHcl(bedrockdataautomationProjectEncryptionConfigurationToHclTerraform, true)(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockdataautomationProjectEncryptionConfigurationList",
      },
      override_configuration: {
        value: cdktn.listMapperHcl(bedrockdataautomationProjectOverrideConfigurationToHclTerraform, true)(this._overrideConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockdataautomationProjectOverrideConfigurationList",
      },
      standard_output_configuration: {
        value: cdktn.listMapperHcl(bedrockdataautomationProjectStandardOutputConfigurationToHclTerraform, true)(this._standardOutputConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockdataautomationProjectStandardOutputConfigurationList",
      },
      timeouts: {
        value: bedrockdataautomationProjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockdataautomationProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
