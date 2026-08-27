/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/bedrock_foundation_model_agreement_offers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsBedrockFoundationModelAgreementOffersConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/bedrock_foundation_model_agreement_offers#model_id DataAwsBedrockFoundationModelAgreementOffers#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/bedrock_foundation_model_agreement_offers#offer_type DataAwsBedrockFoundationModelAgreementOffers#offer_type}
  */
  readonly offerType?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/bedrock_foundation_model_agreement_offers#region DataAwsBedrockFoundationModelAgreementOffers#region}
  */
  readonly region?: string;
}
export interface DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm {
}

export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermToTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermToHclTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference {
    return new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm {
}

export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermToTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermToHclTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // refund_policy_description - computed: true, optional: false, required: false
  public get refundPolicyDescription() {
    return this.getStringAttribute('refund_policy_description');
  }
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference {
    return new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard {
}

export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardToTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardToHclTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getStringAttribute('price');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference {
    return new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm {
}

export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermToTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermToHclTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rate_card - computed: true, optional: false, required: false
  private _rateCard = new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList(this, "rate_card", false);
  public get rateCard() {
    return this._rateCard;
  }
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference {
    return new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm {
}

export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermToTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermToHclTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agreement_duration - computed: true, optional: false, required: false
  public get agreementDuration() {
    return this.getStringAttribute('agreement_duration');
  }
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference {
    return new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails {
}

export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsToTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsToHclTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // legal_term - computed: true, optional: false, required: false
  private _legalTerm = new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList(this, "legal_term", false);
  public get legalTerm() {
    return this._legalTerm;
  }

  // support_term - computed: true, optional: false, required: false
  private _supportTerm = new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList(this, "support_term", false);
  public get supportTerm() {
    return this._supportTerm;
  }

  // usage_based_pricing_term - computed: true, optional: false, required: false
  private _usageBasedPricingTerm = new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList(this, "usage_based_pricing_term", false);
  public get usageBasedPricingTerm() {
    return this._usageBasedPricingTerm;
  }

  // validity_term - computed: true, optional: false, required: false
  private _validityTerm = new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList(this, "validity_term", false);
  public get validityTerm() {
    return this._validityTerm;
  }
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference {
    return new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBedrockFoundationModelAgreementOffersOffers {
}

export function dataAwsBedrockFoundationModelAgreementOffersOffersToTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsBedrockFoundationModelAgreementOffersOffersToHclTerraform(struct?: DataAwsBedrockFoundationModelAgreementOffersOffers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsBedrockFoundationModelAgreementOffersOffers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockFoundationModelAgreementOffersOffers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // offer_id - computed: true, optional: false, required: false
  public get offerId() {
    return this.getStringAttribute('offer_id');
  }

  // offer_token - computed: true, optional: false, required: false
  public get offerToken() {
    return this.getStringAttribute('offer_token');
  }

  // term_details - computed: true, optional: false, required: false
  private _termDetails = new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList(this, "term_details", false);
  public get termDetails() {
    return this._termDetails;
  }
}

export class DataAwsBedrockFoundationModelAgreementOffersOffersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference {
    return new DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/bedrock_foundation_model_agreement_offers aws_bedrock_foundation_model_agreement_offers}
*/
export class DataAwsBedrockFoundationModelAgreementOffers extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_foundation_model_agreement_offers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsBedrockFoundationModelAgreementOffers resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsBedrockFoundationModelAgreementOffers to import
  * @param importFromId The id of the existing DataAwsBedrockFoundationModelAgreementOffers that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/bedrock_foundation_model_agreement_offers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsBedrockFoundationModelAgreementOffers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_foundation_model_agreement_offers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/bedrock_foundation_model_agreement_offers aws_bedrock_foundation_model_agreement_offers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBedrockFoundationModelAgreementOffersConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsBedrockFoundationModelAgreementOffersConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_foundation_model_agreement_offers',
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
    this._modelId = config.modelId;
    this._offerType = config.offerType;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // offer_type - computed: false, optional: true, required: false
  private _offerType?: string; 
  public get offerType() {
    return this.getStringAttribute('offer_type');
  }
  public set offerType(value: string) {
    this._offerType = value;
  }
  public resetOfferType() {
    this._offerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerTypeInput() {
    return this._offerType;
  }

  // offers - computed: true, optional: false, required: false
  private _offers = new DataAwsBedrockFoundationModelAgreementOffersOffersList(this, "offers", false);
  public get offers() {
    return this._offers;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_id: cdktn.stringToTerraform(this._modelId),
      offer_type: cdktn.stringToTerraform(this._offerType),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      model_id: {
        value: cdktn.stringToHclTerraform(this._modelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offer_type: {
        value: cdktn.stringToHclTerraform(this._offerType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
