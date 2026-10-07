/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralAwsBedrockruntimeApplyGuardrailConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail#guardrail_identifier EphemeralAwsBedrockruntimeApplyGuardrail#guardrail_identifier}
  */
  readonly guardrailIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail#guardrail_version EphemeralAwsBedrockruntimeApplyGuardrail#guardrail_version}
  */
  readonly guardrailVersion: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail#region EphemeralAwsBedrockruntimeApplyGuardrail#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail#source EphemeralAwsBedrockruntimeApplyGuardrail#source}
  */
  readonly source: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail#content EphemeralAwsBedrockruntimeApplyGuardrail#content}
  */
  readonly content?: EphemeralAwsBedrockruntimeApplyGuardrailContent[] | cdktn.IResolvable;
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetails {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetailsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetailsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guardrail_arn - computed: true, optional: false, required: false
  public get guardrailArn() {
    return this.getStringAttribute('guardrail_arn');
  }

  // guardrail_id - computed: true, optional: false, required: false
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
  }

  // guardrail_origin - computed: true, optional: false, required: false
  public get guardrailOrigin() {
    return this.getListAttribute('guardrail_origin');
  }

  // guardrail_ownership - computed: true, optional: false, required: false
  public get guardrailOwnership() {
    return this.getStringAttribute('guardrail_ownership');
  }

  // guardrail_version - computed: true, optional: false, required: false
  public get guardrailVersion() {
    return this.getStringAttribute('guardrail_version');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetailsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetailsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRules {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRulesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRulesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // policy_version_arn - computed: true, optional: false, required: false
  public get policyVersionArn() {
    return this.getStringAttribute('policy_version_arn');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRulesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRulesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarning {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims - computed: true, optional: false, required: false
  private _claims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }

  // premises - computed: true, optional: false, required: false
  private _premises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningPremisesList(this, "premises", false);
  public get premises() {
    return this._premises;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslation {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims - computed: true, optional: false, required: false
  private _claims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }

  // confidence - computed: true, optional: false, required: false
  public get confidence() {
    return this.getNumberAttribute('confidence');
  }

  // premises - computed: true, optional: false, required: false
  private _premises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationPremisesList(this, "premises", false);
  public get premises() {
    return this._premises;
  }

  // untranslated_claims - computed: true, optional: false, required: false
  private _untranslatedClaims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedClaimsList(this, "untranslated_claims", false);
  public get untranslatedClaims() {
    return this._untranslatedClaims;
  }

  // untranslated_premises - computed: true, optional: false, required: false
  private _untranslatedPremises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationUntranslatedPremisesList(this, "untranslated_premises", false);
  public get untranslatedPremises() {
    return this._untranslatedPremises;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossible {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossible): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossible): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossible | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossible | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contradicting_rules - computed: true, optional: false, required: false
  private _contradictingRules = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleContradictingRulesList(this, "contradicting_rules", false);
  public get contradictingRules() {
    return this._contradictingRules;
  }

  // logic_warning - computed: true, optional: false, required: false
  private _logicWarning = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleLogicWarningList(this, "logic_warning", false);
  public get logicWarning() {
    return this._logicWarning;
  }

  // translation - computed: true, optional: false, required: false
  private _translation = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleTranslationList(this, "translation", false);
  public get translation() {
    return this._translation;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRules {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRulesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRulesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // policy_version_arn - computed: true, optional: false, required: false
  public get policyVersionArn() {
    return this.getStringAttribute('policy_version_arn');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRulesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRulesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarning {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims - computed: true, optional: false, required: false
  private _claims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }

  // premises - computed: true, optional: false, required: false
  private _premises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningPremisesList(this, "premises", false);
  public get premises() {
    return this._premises;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslation {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims - computed: true, optional: false, required: false
  private _claims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }

  // confidence - computed: true, optional: false, required: false
  public get confidence() {
    return this.getNumberAttribute('confidence');
  }

  // premises - computed: true, optional: false, required: false
  private _premises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationPremisesList(this, "premises", false);
  public get premises() {
    return this._premises;
  }

  // untranslated_claims - computed: true, optional: false, required: false
  private _untranslatedClaims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedClaimsList(this, "untranslated_claims", false);
  public get untranslatedClaims() {
    return this._untranslatedClaims;
  }

  // untranslated_premises - computed: true, optional: false, required: false
  private _untranslatedPremises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationUntranslatedPremisesList(this, "untranslated_premises", false);
  public get untranslatedPremises() {
    return this._untranslatedPremises;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalid {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contradicting_rules - computed: true, optional: false, required: false
  private _contradictingRules = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidContradictingRulesList(this, "contradicting_rules", false);
  public get contradictingRules() {
    return this._contradictingRules;
  }

  // logic_warning - computed: true, optional: false, required: false
  private _logicWarning = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidLogicWarningList(this, "logic_warning", false);
  public get logicWarning() {
    return this._logicWarning;
  }

  // translation - computed: true, optional: false, required: false
  private _translation = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidTranslationList(this, "translation", false);
  public get translation() {
    return this._translation;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslations {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslationsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslationsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslationsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslationsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatements {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatementsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatementsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatementsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatementsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenario {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenario | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenario | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // statements - computed: true, optional: false, required: false
  private _statements = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioStatementsList(this, "statements", false);
  public get statements() {
    return this._statements;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatements {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatementsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatementsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatementsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatementsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenario {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenario | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenario | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // statements - computed: true, optional: false, required: false
  private _statements = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioStatementsList(this, "statements", false);
  public get statements() {
    return this._statements;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarning {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims - computed: true, optional: false, required: false
  private _claims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }

  // premises - computed: true, optional: false, required: false
  private _premises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningPremisesList(this, "premises", false);
  public get premises() {
    return this._premises;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslation {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims - computed: true, optional: false, required: false
  private _claims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }

  // confidence - computed: true, optional: false, required: false
  public get confidence() {
    return this.getNumberAttribute('confidence');
  }

  // premises - computed: true, optional: false, required: false
  private _premises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationPremisesList(this, "premises", false);
  public get premises() {
    return this._premises;
  }

  // untranslated_claims - computed: true, optional: false, required: false
  private _untranslatedClaims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedClaimsList(this, "untranslated_claims", false);
  public get untranslatedClaims() {
    return this._untranslatedClaims;
  }

  // untranslated_premises - computed: true, optional: false, required: false
  private _untranslatedPremises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationUntranslatedPremisesList(this, "untranslated_premises", false);
  public get untranslatedPremises() {
    return this._untranslatedPremises;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiable {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims_false_scenario - computed: true, optional: false, required: false
  private _claimsFalseScenario = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsFalseScenarioList(this, "claims_false_scenario", false);
  public get claimsFalseScenario() {
    return this._claimsFalseScenario;
  }

  // claims_true_scenario - computed: true, optional: false, required: false
  private _claimsTrueScenario = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableClaimsTrueScenarioList(this, "claims_true_scenario", false);
  public get claimsTrueScenario() {
    return this._claimsTrueScenario;
  }

  // logic_warning - computed: true, optional: false, required: false
  private _logicWarning = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableLogicWarningList(this, "logic_warning", false);
  public get logicWarning() {
    return this._logicWarning;
  }

  // translation - computed: true, optional: false, required: false
  private _translation = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableTranslationList(this, "translation", false);
  public get translation() {
    return this._translation;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplex {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplexToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplexToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplex): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplexOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplexList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplexOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatements {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatementsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatementsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatementsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatementsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenarios {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenarios): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenarios): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenarios | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenarios | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // statements - computed: true, optional: false, required: false
  private _statements = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosStatementsList(this, "statements", false);
  public get statements() {
    return this._statements;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslations {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims - computed: true, optional: false, required: false
  private _claims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }

  // confidence - computed: true, optional: false, required: false
  public get confidence() {
    return this.getNumberAttribute('confidence');
  }

  // premises - computed: true, optional: false, required: false
  private _premises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsPremisesList(this, "premises", false);
  public get premises() {
    return this._premises;
  }

  // untranslated_claims - computed: true, optional: false, required: false
  private _untranslatedClaims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedClaimsList(this, "untranslated_claims", false);
  public get untranslatedClaims() {
    return this._untranslatedClaims;
  }

  // untranslated_premises - computed: true, optional: false, required: false
  private _untranslatedPremises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsUntranslatedPremisesList(this, "untranslated_premises", false);
  public get untranslatedPremises() {
    return this._untranslatedPremises;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptions {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // translations - computed: true, optional: false, required: false
  private _translations = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsTranslationsList(this, "translations", false);
  public get translations() {
    return this._translations;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguous {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguous): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguous): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguous | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguous | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // difference_scenarios - computed: true, optional: false, required: false
  private _differenceScenarios = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousDifferenceScenariosList(this, "difference_scenarios", false);
  public get differenceScenarios() {
    return this._differenceScenarios;
  }

  // options - computed: true, optional: false, required: false
  private _options = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatements {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatementsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatementsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatementsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatementsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenario {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenario): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenario | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenario | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // statements - computed: true, optional: false, required: false
  private _statements = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioStatementsList(this, "statements", false);
  public get statements() {
    return this._statements;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarning {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims - computed: true, optional: false, required: false
  private _claims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }

  // premises - computed: true, optional: false, required: false
  private _premises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningPremisesList(this, "premises", false);
  public get premises() {
    return this._premises;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRules {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRulesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRulesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // policy_version_arn - computed: true, optional: false, required: false
  public get policyVersionArn() {
    return this.getStringAttribute('policy_version_arn');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRulesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRulesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // natural_language - computed: true, optional: false, required: false
  public get naturalLanguage() {
    return this.getStringAttribute('natural_language');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaims {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaimsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaimsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaimsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaimsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremises {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremisesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremisesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremises): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremisesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremises | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremises | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremisesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremisesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslation {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims - computed: true, optional: false, required: false
  private _claims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }

  // confidence - computed: true, optional: false, required: false
  public get confidence() {
    return this.getNumberAttribute('confidence');
  }

  // premises - computed: true, optional: false, required: false
  private _premises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationPremisesList(this, "premises", false);
  public get premises() {
    return this._premises;
  }

  // untranslated_claims - computed: true, optional: false, required: false
  private _untranslatedClaims = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedClaimsList(this, "untranslated_claims", false);
  public get untranslatedClaims() {
    return this._untranslatedClaims;
  }

  // untranslated_premises - computed: true, optional: false, required: false
  private _untranslatedPremises = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationUntranslatedPremisesList(this, "untranslated_premises", false);
  public get untranslatedPremises() {
    return this._untranslatedPremises;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValid {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claims_true_scenario - computed: true, optional: false, required: false
  private _claimsTrueScenario = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidClaimsTrueScenarioList(this, "claims_true_scenario", false);
  public get claimsTrueScenario() {
    return this._claimsTrueScenario;
  }

  // logic_warning - computed: true, optional: false, required: false
  private _logicWarning = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidLogicWarningList(this, "logic_warning", false);
  public get logicWarning() {
    return this._logicWarning;
  }

  // supporting_rules - computed: true, optional: false, required: false
  private _supportingRules = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidSupportingRulesList(this, "supporting_rules", false);
  public get supportingRules() {
    return this._supportingRules;
  }

  // translation - computed: true, optional: false, required: false
  private _translation = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidTranslationList(this, "translation", false);
  public get translation() {
    return this._translation;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindings {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // impossible - computed: true, optional: false, required: false
  private _impossible = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsImpossibleList(this, "impossible", false);
  public get impossible() {
    return this._impossible;
  }

  // invalid - computed: true, optional: false, required: false
  private _invalid = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsInvalidList(this, "invalid", false);
  public get invalid() {
    return this._invalid;
  }

  // no_translations - computed: true, optional: false, required: false
  private _noTranslations = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsNoTranslationsList(this, "no_translations", false);
  public get noTranslations() {
    return this._noTranslations;
  }

  // satisfiable - computed: true, optional: false, required: false
  private _satisfiable = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsSatisfiableList(this, "satisfiable", false);
  public get satisfiable() {
    return this._satisfiable;
  }

  // too_complex - computed: true, optional: false, required: false
  private _tooComplex = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTooComplexList(this, "too_complex", false);
  public get tooComplex() {
    return this._tooComplex;
  }

  // translation_ambiguous - computed: true, optional: false, required: false
  private _translationAmbiguous = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsTranslationAmbiguousList(this, "translation_ambiguous", false);
  public get translationAmbiguous() {
    return this._translationAmbiguous;
  }

  // valid - computed: true, optional: false, required: false
  private _valid = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsValidList(this, "valid", false);
  public get valid() {
    return this._valid;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicy {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // findings - computed: true, optional: false, required: false
  private _findings = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyFindingsList(this, "findings", false);
  public get findings() {
    return this._findings;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFilters {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFiltersToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFiltersToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // confidence - computed: true, optional: false, required: false
  public get confidence() {
    return this.getStringAttribute('confidence');
  }

  // detected - computed: true, optional: false, required: false
  public get detected() {
    return this.getBooleanAttribute('detected');
  }

  // filter_strength - computed: true, optional: false, required: false
  public get filterStrength() {
    return this.getStringAttribute('filter_strength');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFiltersList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFiltersOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicy {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFilters {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFiltersToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFiltersToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // detected - computed: true, optional: false, required: false
  public get detected() {
    return this.getBooleanAttribute('detected');
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFiltersList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFiltersOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicy {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImages {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImagesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImagesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guarded - computed: true, optional: false, required: false
  public get guarded() {
    return this.getNumberAttribute('guarded');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImagesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImagesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharacters {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharactersToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharacters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharactersToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharacters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharactersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharacters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharacters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guarded - computed: true, optional: false, required: false
  public get guarded() {
    return this.getNumberAttribute('guarded');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharactersList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharactersOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharactersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverage {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // images - computed: true, optional: false, required: false
  private _images = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // text_characters - computed: true, optional: false, required: false
  private _textCharacters = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageTextCharactersList(this, "text_characters", false);
  public get textCharacters() {
    return this._textCharacters;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsage {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsageToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsageToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated_reasoning_policies - computed: true, optional: false, required: false
  public get automatedReasoningPolicies() {
    return this.getNumberAttribute('automated_reasoning_policies');
  }

  // automated_reasoning_policy_units - computed: true, optional: false, required: false
  public get automatedReasoningPolicyUnits() {
    return this.getNumberAttribute('automated_reasoning_policy_units');
  }

  // content_policy_image_units - computed: true, optional: false, required: false
  public get contentPolicyImageUnits() {
    return this.getNumberAttribute('content_policy_image_units');
  }

  // content_policy_units - computed: true, optional: false, required: false
  public get contentPolicyUnits() {
    return this.getNumberAttribute('content_policy_units');
  }

  // contextual_grounding_policy_units - computed: true, optional: false, required: false
  public get contextualGroundingPolicyUnits() {
    return this.getNumberAttribute('contextual_grounding_policy_units');
  }

  // sensitive_information_policy_free_units - computed: true, optional: false, required: false
  public get sensitiveInformationPolicyFreeUnits() {
    return this.getNumberAttribute('sensitive_information_policy_free_units');
  }

  // sensitive_information_policy_units - computed: true, optional: false, required: false
  public get sensitiveInformationPolicyUnits() {
    return this.getNumberAttribute('sensitive_information_policy_units');
  }

  // topic_policy_units - computed: true, optional: false, required: false
  public get topicPolicyUnits() {
    return this.getNumberAttribute('topic_policy_units');
  }

  // word_policy_units - computed: true, optional: false, required: false
  public get wordPolicyUnits() {
    return this.getNumberAttribute('word_policy_units');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsageList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsageOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetrics {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guardrail_coverage - computed: true, optional: false, required: false
  private _guardrailCoverage = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsGuardrailCoverageList(this, "guardrail_coverage", false);
  public get guardrailCoverage() {
    return this._guardrailCoverage;
  }

  // guardrail_processing_latency - computed: true, optional: false, required: false
  public get guardrailProcessingLatency() {
    return this.getNumberAttribute('guardrail_processing_latency');
  }

  // usage - computed: true, optional: false, required: false
  private _usage = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsUsageList(this, "usage", false);
  public get usage() {
    return this._usage;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntities {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntitiesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntitiesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // detected - computed: true, optional: false, required: false
  public get detected() {
    return this.getBooleanAttribute('detected');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntitiesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntitiesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexes {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // detected - computed: true, optional: false, required: false
  public get detected() {
    return this.getBooleanAttribute('detected');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicy {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pii_entities - computed: true, optional: false, required: false
  private _piiEntities = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyPiiEntitiesList(this, "pii_entities", false);
  public get piiEntities() {
    return this._piiEntities;
  }

  // regexes - computed: true, optional: false, required: false
  private _regexes = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyRegexesList(this, "regexes", false);
  public get regexes() {
    return this._regexes;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopics {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopicsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopicsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopicsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // detected - computed: true, optional: false, required: false
  public get detected() {
    return this.getBooleanAttribute('detected');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopicsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopicsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicy {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // topics - computed: true, optional: false, required: false
  private _topics = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWords {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWordsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWords): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWordsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWords): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWordsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // detected - computed: true, optional: false, required: false
  public get detected() {
    return this.getBooleanAttribute('detected');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWordsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWordsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordLists {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordListsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordLists): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordListsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordLists): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordListsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordLists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // detected - computed: true, optional: false, required: false
  public get detected() {
    return this.getBooleanAttribute('detected');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordListsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordListsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicy {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_words - computed: true, optional: false, required: false
  private _customWords = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyCustomWordsList(this, "custom_words", false);
  public get customWords() {
    return this._customWords;
  }

  // managed_word_lists - computed: true, optional: false, required: false
  private _managedWordLists = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyManagedWordListsList(this, "managed_word_lists", false);
  public get managedWordLists() {
    return this._managedWordLists;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailAssessments {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailAssessmentsToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailAssessments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailAssessments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailAssessments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applied_guardrail_details - computed: true, optional: false, required: false
  private _appliedGuardrailDetails = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAppliedGuardrailDetailsList(this, "applied_guardrail_details", false);
  public get appliedGuardrailDetails() {
    return this._appliedGuardrailDetails;
  }

  // automated_reasoning_policy - computed: true, optional: false, required: false
  private _automatedReasoningPolicy = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsAutomatedReasoningPolicyList(this, "automated_reasoning_policy", false);
  public get automatedReasoningPolicy() {
    return this._automatedReasoningPolicy;
  }

  // content_policy - computed: true, optional: false, required: false
  private _contentPolicy = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContentPolicyList(this, "content_policy", false);
  public get contentPolicy() {
    return this._contentPolicy;
  }

  // contextual_grounding_policy - computed: true, optional: false, required: false
  private _contextualGroundingPolicy = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsContextualGroundingPolicyList(this, "contextual_grounding_policy", false);
  public get contextualGroundingPolicy() {
    return this._contextualGroundingPolicy;
  }

  // invocation_metrics - computed: true, optional: false, required: false
  private _invocationMetrics = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsInvocationMetricsList(this, "invocation_metrics", false);
  public get invocationMetrics() {
    return this._invocationMetrics;
  }

  // sensitive_information_policy - computed: true, optional: false, required: false
  private _sensitiveInformationPolicy = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsSensitiveInformationPolicyList(this, "sensitive_information_policy", false);
  public get sensitiveInformationPolicy() {
    return this._sensitiveInformationPolicy;
  }

  // topic_policy - computed: true, optional: false, required: false
  private _topicPolicy = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsTopicPolicyList(this, "topic_policy", false);
  public get topicPolicy() {
    return this._topicPolicy;
  }

  // word_policy - computed: true, optional: false, required: false
  private _wordPolicy = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsWordPolicyList(this, "word_policy", false);
  public get wordPolicy() {
    return this._wordPolicy;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImages {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImagesToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImagesToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guarded - computed: true, optional: false, required: false
  public get guarded() {
    return this.getNumberAttribute('guarded');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImagesList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImagesOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharacters {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharactersToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharacters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharactersToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharacters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharactersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharacters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharacters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guarded - computed: true, optional: false, required: false
  public get guarded() {
    return this.getNumberAttribute('guarded');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharactersList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharactersOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharactersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverage {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // images - computed: true, optional: false, required: false
  private _images = new EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // text_characters - computed: true, optional: false, required: false
  private _textCharacters = new EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageTextCharactersList(this, "text_characters", false);
  public get textCharacters() {
    return this._textCharacters;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailOutput {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailOutputToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailOutputToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailOutputList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailOutputOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailUsage {
}

export function ephemeralAwsBedrockruntimeApplyGuardrailUsageToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailUsageToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EphemeralAwsBedrockruntimeApplyGuardrailUsageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated_reasoning_policies - computed: true, optional: false, required: false
  public get automatedReasoningPolicies() {
    return this.getNumberAttribute('automated_reasoning_policies');
  }

  // automated_reasoning_policy_units - computed: true, optional: false, required: false
  public get automatedReasoningPolicyUnits() {
    return this.getNumberAttribute('automated_reasoning_policy_units');
  }

  // content_policy_image_units - computed: true, optional: false, required: false
  public get contentPolicyImageUnits() {
    return this.getNumberAttribute('content_policy_image_units');
  }

  // content_policy_units - computed: true, optional: false, required: false
  public get contentPolicyUnits() {
    return this.getNumberAttribute('content_policy_units');
  }

  // contextual_grounding_policy_units - computed: true, optional: false, required: false
  public get contextualGroundingPolicyUnits() {
    return this.getNumberAttribute('contextual_grounding_policy_units');
  }

  // sensitive_information_policy_free_units - computed: true, optional: false, required: false
  public get sensitiveInformationPolicyFreeUnits() {
    return this.getNumberAttribute('sensitive_information_policy_free_units');
  }

  // sensitive_information_policy_units - computed: true, optional: false, required: false
  public get sensitiveInformationPolicyUnits() {
    return this.getNumberAttribute('sensitive_information_policy_units');
  }

  // topic_policy_units - computed: true, optional: false, required: false
  public get topicPolicyUnits() {
    return this.getNumberAttribute('topic_policy_units');
  }

  // word_policy_units - computed: true, optional: false, required: false
  public get wordPolicyUnits() {
    return this.getNumberAttribute('word_policy_units');
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailUsageList extends cdktn.ComplexList {

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailUsageOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailContentText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail#qualifiers EphemeralAwsBedrockruntimeApplyGuardrail#qualifiers}
  */
  readonly qualifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail#text EphemeralAwsBedrockruntimeApplyGuardrail#text}
  */
  readonly text: string;
}

export function ephemeralAwsBedrockruntimeApplyGuardrailContentTextToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailContentText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    qualifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.qualifiers),
    text: cdktn.stringToTerraform(struct!.text),
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailContentTextToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailContentText | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    qualifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.qualifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EphemeralAwsBedrockruntimeApplyGuardrailContentTextOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailContentText | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qualifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifiers = this._qualifiers;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailContentText | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._qualifiers = undefined;
      this._text = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._qualifiers = value.qualifiers;
      this._text = value.text;
    }
  }

  // qualifiers - computed: false, optional: true, required: false
  private _qualifiers?: string[]; 
  public get qualifiers() {
    return this.getListAttribute('qualifiers');
  }
  public set qualifiers(value: string[]) {
    this._qualifiers = value;
  }
  public resetQualifiers() {
    this._qualifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifiersInput() {
    return this._qualifiers;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailContentTextList extends cdktn.ComplexList {
  public internalValue? : EphemeralAwsBedrockruntimeApplyGuardrailContentText[] | cdktn.IResolvable

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailContentTextOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailContentTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EphemeralAwsBedrockruntimeApplyGuardrailContent {
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail#text EphemeralAwsBedrockruntimeApplyGuardrail#text}
  */
  readonly text?: EphemeralAwsBedrockruntimeApplyGuardrailContentText[] | cdktn.IResolvable;
}

export function ephemeralAwsBedrockruntimeApplyGuardrailContentToTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.listMapper(ephemeralAwsBedrockruntimeApplyGuardrailContentTextToTerraform, true)(struct!.text),
  }
}


export function ephemeralAwsBedrockruntimeApplyGuardrailContentToHclTerraform(struct?: EphemeralAwsBedrockruntimeApplyGuardrailContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.listMapperHcl(ephemeralAwsBedrockruntimeApplyGuardrailContentTextToHclTerraform, true)(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "EphemeralAwsBedrockruntimeApplyGuardrailContentTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EphemeralAwsBedrockruntimeApplyGuardrailContentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EphemeralAwsBedrockruntimeApplyGuardrailContent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralAwsBedrockruntimeApplyGuardrailContent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text.internalValue = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text = new EphemeralAwsBedrockruntimeApplyGuardrailContentTextList(this, "text", false);
  public get text() {
    return this._text;
  }
  public putText(value: EphemeralAwsBedrockruntimeApplyGuardrailContentText[] | cdktn.IResolvable) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class EphemeralAwsBedrockruntimeApplyGuardrailContentList extends cdktn.ComplexList {
  public internalValue? : EphemeralAwsBedrockruntimeApplyGuardrailContent[] | cdktn.IResolvable

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
  public get(index: number): EphemeralAwsBedrockruntimeApplyGuardrailContentOutputReference {
    return new EphemeralAwsBedrockruntimeApplyGuardrailContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail aws_bedrockruntime_apply_guardrail}
*/
export class EphemeralAwsBedrockruntimeApplyGuardrail extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockruntime_apply_guardrail";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/ephemeral-resources/bedrockruntime_apply_guardrail aws_bedrockruntime_apply_guardrail} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralAwsBedrockruntimeApplyGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralAwsBedrockruntimeApplyGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockruntime_apply_guardrail',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.68.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._guardrailIdentifier = config.guardrailIdentifier;
    this._guardrailVersion = config.guardrailVersion;
    this._region = config.region;
    this._source = config.source;
    this._content.internalValue = config.content;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // action_reason - computed: true, optional: false, required: false
  public get actionReason() {
    return this.getStringAttribute('action_reason');
  }

  // assessments - computed: true, optional: false, required: false
  private _assessments = new EphemeralAwsBedrockruntimeApplyGuardrailAssessmentsList(this, "assessments", false);
  public get assessments() {
    return this._assessments;
  }

  // guardrail_coverage - computed: true, optional: false, required: false
  private _guardrailCoverage = new EphemeralAwsBedrockruntimeApplyGuardrailGuardrailCoverageList(this, "guardrail_coverage", false);
  public get guardrailCoverage() {
    return this._guardrailCoverage;
  }

  // guardrail_identifier - computed: false, optional: false, required: true
  private _guardrailIdentifier?: string; 
  public get guardrailIdentifier() {
    return this.getStringAttribute('guardrail_identifier');
  }
  public set guardrailIdentifier(value: string) {
    this._guardrailIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailIdentifierInput() {
    return this._guardrailIdentifier;
  }

  // guardrail_version - computed: false, optional: false, required: true
  private _guardrailVersion?: string; 
  public get guardrailVersion() {
    return this.getStringAttribute('guardrail_version');
  }
  public set guardrailVersion(value: string) {
    this._guardrailVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailVersionInput() {
    return this._guardrailVersion;
  }

  // output - computed: true, optional: false, required: false
  private _output = new EphemeralAwsBedrockruntimeApplyGuardrailOutputList(this, "output", false);
  public get output() {
    return this._output;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // usage - computed: true, optional: false, required: false
  private _usage = new EphemeralAwsBedrockruntimeApplyGuardrailUsageList(this, "usage", false);
  public get usage() {
    return this._usage;
  }

  // content - computed: false, optional: true, required: false
  private _content = new EphemeralAwsBedrockruntimeApplyGuardrailContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: EphemeralAwsBedrockruntimeApplyGuardrailContent[] | cdktn.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      guardrail_identifier: cdktn.stringToTerraform(this._guardrailIdentifier),
      guardrail_version: cdktn.stringToTerraform(this._guardrailVersion),
      region: cdktn.stringToTerraform(this._region),
      source: cdktn.stringToTerraform(this._source),
      content: cdktn.listMapper(ephemeralAwsBedrockruntimeApplyGuardrailContentToTerraform, true)(this._content.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      guardrail_identifier: {
        value: cdktn.stringToHclTerraform(this._guardrailIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guardrail_version: {
        value: cdktn.stringToHclTerraform(this._guardrailVersion),
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
      source: {
        value: cdktn.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktn.listMapperHcl(ephemeralAwsBedrockruntimeApplyGuardrailContentToHclTerraform, true)(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EphemeralAwsBedrockruntimeApplyGuardrailContentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
