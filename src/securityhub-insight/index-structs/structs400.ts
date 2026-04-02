/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { SecurityhubInsightFiltersAwsAccountId,
securityhubInsightFiltersAwsAccountIdToTerraform,
securityhubInsightFiltersAwsAccountIdToHclTerraform,
SecurityhubInsightFiltersAwsAccountIdList,
SecurityhubInsightFiltersAwsAccountName,
securityhubInsightFiltersAwsAccountNameToTerraform,
securityhubInsightFiltersAwsAccountNameToHclTerraform,
SecurityhubInsightFiltersAwsAccountNameList,
SecurityhubInsightFiltersCompanyName,
securityhubInsightFiltersCompanyNameToTerraform,
securityhubInsightFiltersCompanyNameToHclTerraform,
SecurityhubInsightFiltersCompanyNameList,
SecurityhubInsightFiltersComplianceAssociatedStandardsId,
securityhubInsightFiltersComplianceAssociatedStandardsIdToTerraform,
securityhubInsightFiltersComplianceAssociatedStandardsIdToHclTerraform,
SecurityhubInsightFiltersComplianceAssociatedStandardsIdList,
SecurityhubInsightFiltersComplianceSecurityControlId,
securityhubInsightFiltersComplianceSecurityControlIdToTerraform,
securityhubInsightFiltersComplianceSecurityControlIdToHclTerraform,
SecurityhubInsightFiltersComplianceSecurityControlIdList,
SecurityhubInsightFiltersComplianceSecurityControlParametersName,
securityhubInsightFiltersComplianceSecurityControlParametersNameToTerraform,
securityhubInsightFiltersComplianceSecurityControlParametersNameToHclTerraform,
SecurityhubInsightFiltersComplianceSecurityControlParametersNameList,
SecurityhubInsightFiltersComplianceSecurityControlParametersValue,
securityhubInsightFiltersComplianceSecurityControlParametersValueToTerraform,
securityhubInsightFiltersComplianceSecurityControlParametersValueToHclTerraform,
SecurityhubInsightFiltersComplianceSecurityControlParametersValueList,
SecurityhubInsightFiltersComplianceStatus,
securityhubInsightFiltersComplianceStatusToTerraform,
securityhubInsightFiltersComplianceStatusToHclTerraform,
SecurityhubInsightFiltersComplianceStatusList,
SecurityhubInsightFiltersConfidence,
securityhubInsightFiltersConfidenceToTerraform,
securityhubInsightFiltersConfidenceToHclTerraform,
SecurityhubInsightFiltersConfidenceList,
SecurityhubInsightFiltersCreatedAt,
securityhubInsightFiltersCreatedAtToTerraform,
securityhubInsightFiltersCreatedAtToHclTerraform,
SecurityhubInsightFiltersCreatedAtList,
SecurityhubInsightFiltersCriticality,
securityhubInsightFiltersCriticalityToTerraform,
securityhubInsightFiltersCriticalityToHclTerraform,
SecurityhubInsightFiltersCriticalityList,
SecurityhubInsightFiltersDescription,
securityhubInsightFiltersDescriptionToTerraform,
securityhubInsightFiltersDescriptionToHclTerraform,
SecurityhubInsightFiltersDescriptionList,
SecurityhubInsightFiltersFindingProviderFieldsConfidence,
securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform,
securityhubInsightFiltersFindingProviderFieldsConfidenceToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsConfidenceList,
SecurityhubInsightFiltersFindingProviderFieldsCriticality,
securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform,
securityhubInsightFiltersFindingProviderFieldsCriticalityToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsCriticalityList,
SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId,
securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform,
securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList,
SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn,
securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform,
securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList,
SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel,
securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform,
securityhubInsightFiltersFindingProviderFieldsSeverityLabelToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList,
SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal,
securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform,
securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList,
SecurityhubInsightFiltersFindingProviderFieldsTypes,
securityhubInsightFiltersFindingProviderFieldsTypesToTerraform,
securityhubInsightFiltersFindingProviderFieldsTypesToHclTerraform,
SecurityhubInsightFiltersFindingProviderFieldsTypesList,
SecurityhubInsightFiltersFirstObservedAt,
securityhubInsightFiltersFirstObservedAtToTerraform,
securityhubInsightFiltersFirstObservedAtToHclTerraform,
SecurityhubInsightFiltersFirstObservedAtList,
SecurityhubInsightFiltersGeneratorId,
securityhubInsightFiltersGeneratorIdToTerraform,
securityhubInsightFiltersGeneratorIdToHclTerraform,
SecurityhubInsightFiltersGeneratorIdList,
SecurityhubInsightFiltersId,
securityhubInsightFiltersIdToTerraform,
securityhubInsightFiltersIdToHclTerraform,
SecurityhubInsightFiltersIdList,
SecurityhubInsightFiltersKeyword,
securityhubInsightFiltersKeywordToTerraform,
securityhubInsightFiltersKeywordToHclTerraform,
SecurityhubInsightFiltersKeywordList,
SecurityhubInsightFiltersLastObservedAt,
securityhubInsightFiltersLastObservedAtToTerraform,
securityhubInsightFiltersLastObservedAtToHclTerraform,
SecurityhubInsightFiltersLastObservedAtList,
SecurityhubInsightFiltersMalwareName,
securityhubInsightFiltersMalwareNameToTerraform,
securityhubInsightFiltersMalwareNameToHclTerraform,
SecurityhubInsightFiltersMalwareNameList,
SecurityhubInsightFiltersMalwarePath,
securityhubInsightFiltersMalwarePathToTerraform,
securityhubInsightFiltersMalwarePathToHclTerraform,
SecurityhubInsightFiltersMalwarePathList,
SecurityhubInsightFiltersMalwareState,
securityhubInsightFiltersMalwareStateToTerraform,
securityhubInsightFiltersMalwareStateToHclTerraform,
SecurityhubInsightFiltersMalwareStateList,
SecurityhubInsightFiltersMalwareType,
securityhubInsightFiltersMalwareTypeToTerraform,
securityhubInsightFiltersMalwareTypeToHclTerraform,
SecurityhubInsightFiltersMalwareTypeList,
SecurityhubInsightFiltersNetworkDestinationDomain,
securityhubInsightFiltersNetworkDestinationDomainToTerraform,
securityhubInsightFiltersNetworkDestinationDomainToHclTerraform,
SecurityhubInsightFiltersNetworkDestinationDomainList,
SecurityhubInsightFiltersNetworkDestinationIpv4,
securityhubInsightFiltersNetworkDestinationIpv4ToTerraform,
securityhubInsightFiltersNetworkDestinationIpv4ToHclTerraform,
SecurityhubInsightFiltersNetworkDestinationIpv4List,
SecurityhubInsightFiltersNetworkDestinationIpv6,
securityhubInsightFiltersNetworkDestinationIpv6ToTerraform,
securityhubInsightFiltersNetworkDestinationIpv6ToHclTerraform,
SecurityhubInsightFiltersNetworkDestinationIpv6List,
SecurityhubInsightFiltersNetworkDestinationPort,
securityhubInsightFiltersNetworkDestinationPortToTerraform,
securityhubInsightFiltersNetworkDestinationPortToHclTerraform,
SecurityhubInsightFiltersNetworkDestinationPortList,
SecurityhubInsightFiltersNetworkDirection,
securityhubInsightFiltersNetworkDirectionToTerraform,
securityhubInsightFiltersNetworkDirectionToHclTerraform,
SecurityhubInsightFiltersNetworkDirectionList,
SecurityhubInsightFiltersNetworkProtocol,
securityhubInsightFiltersNetworkProtocolToTerraform,
securityhubInsightFiltersNetworkProtocolToHclTerraform,
SecurityhubInsightFiltersNetworkProtocolList,
SecurityhubInsightFiltersNetworkSourceDomain,
securityhubInsightFiltersNetworkSourceDomainToTerraform,
securityhubInsightFiltersNetworkSourceDomainToHclTerraform,
SecurityhubInsightFiltersNetworkSourceDomainList,
SecurityhubInsightFiltersNetworkSourceIpv4,
securityhubInsightFiltersNetworkSourceIpv4ToTerraform,
securityhubInsightFiltersNetworkSourceIpv4ToHclTerraform,
SecurityhubInsightFiltersNetworkSourceIpv4List,
SecurityhubInsightFiltersNetworkSourceIpv6,
securityhubInsightFiltersNetworkSourceIpv6ToTerraform,
securityhubInsightFiltersNetworkSourceIpv6ToHclTerraform,
SecurityhubInsightFiltersNetworkSourceIpv6List,
SecurityhubInsightFiltersNetworkSourceMac,
securityhubInsightFiltersNetworkSourceMacToTerraform,
securityhubInsightFiltersNetworkSourceMacToHclTerraform,
SecurityhubInsightFiltersNetworkSourceMacList,
SecurityhubInsightFiltersNetworkSourcePort,
securityhubInsightFiltersNetworkSourcePortToTerraform,
securityhubInsightFiltersNetworkSourcePortToHclTerraform,
SecurityhubInsightFiltersNetworkSourcePortList,
SecurityhubInsightFiltersNoteText,
securityhubInsightFiltersNoteTextToTerraform,
securityhubInsightFiltersNoteTextToHclTerraform,
SecurityhubInsightFiltersNoteTextList,
SecurityhubInsightFiltersNoteUpdatedAt,
securityhubInsightFiltersNoteUpdatedAtToTerraform,
securityhubInsightFiltersNoteUpdatedAtToHclTerraform,
SecurityhubInsightFiltersNoteUpdatedAtList,
SecurityhubInsightFiltersNoteUpdatedBy,
securityhubInsightFiltersNoteUpdatedByToTerraform,
securityhubInsightFiltersNoteUpdatedByToHclTerraform,
SecurityhubInsightFiltersNoteUpdatedByList,
SecurityhubInsightFiltersProcessLaunchedAt,
securityhubInsightFiltersProcessLaunchedAtToTerraform,
securityhubInsightFiltersProcessLaunchedAtToHclTerraform,
SecurityhubInsightFiltersProcessLaunchedAtList,
SecurityhubInsightFiltersProcessName,
securityhubInsightFiltersProcessNameToTerraform,
securityhubInsightFiltersProcessNameToHclTerraform,
SecurityhubInsightFiltersProcessNameList,
SecurityhubInsightFiltersProcessParentPid,
securityhubInsightFiltersProcessParentPidToTerraform,
securityhubInsightFiltersProcessParentPidToHclTerraform,
SecurityhubInsightFiltersProcessParentPidList,
SecurityhubInsightFiltersProcessPath,
securityhubInsightFiltersProcessPathToTerraform,
securityhubInsightFiltersProcessPathToHclTerraform,
SecurityhubInsightFiltersProcessPathList,
SecurityhubInsightFiltersProcessPid,
securityhubInsightFiltersProcessPidToTerraform,
securityhubInsightFiltersProcessPidToHclTerraform,
SecurityhubInsightFiltersProcessPidList,
SecurityhubInsightFiltersProcessTerminatedAt,
securityhubInsightFiltersProcessTerminatedAtToTerraform,
securityhubInsightFiltersProcessTerminatedAtToHclTerraform,
SecurityhubInsightFiltersProcessTerminatedAtList,
SecurityhubInsightFiltersProductArn,
securityhubInsightFiltersProductArnToTerraform,
securityhubInsightFiltersProductArnToHclTerraform,
SecurityhubInsightFiltersProductArnList,
SecurityhubInsightFiltersProductFields,
securityhubInsightFiltersProductFieldsToTerraform,
securityhubInsightFiltersProductFieldsToHclTerraform,
SecurityhubInsightFiltersProductFieldsList,
SecurityhubInsightFiltersProductName,
securityhubInsightFiltersProductNameToTerraform,
securityhubInsightFiltersProductNameToHclTerraform,
SecurityhubInsightFiltersProductNameList,
SecurityhubInsightFiltersRecommendationText,
securityhubInsightFiltersRecommendationTextToTerraform,
securityhubInsightFiltersRecommendationTextToHclTerraform,
SecurityhubInsightFiltersRecommendationTextList,
SecurityhubInsightFiltersRecordState,
securityhubInsightFiltersRecordStateToTerraform,
securityhubInsightFiltersRecordStateToHclTerraform,
SecurityhubInsightFiltersRecordStateList,
SecurityhubInsightFiltersRelatedFindingsId,
securityhubInsightFiltersRelatedFindingsIdToTerraform,
securityhubInsightFiltersRelatedFindingsIdToHclTerraform,
SecurityhubInsightFiltersRelatedFindingsIdList,
SecurityhubInsightFiltersRelatedFindingsProductArn,
securityhubInsightFiltersRelatedFindingsProductArnToTerraform,
securityhubInsightFiltersRelatedFindingsProductArnToHclTerraform,
SecurityhubInsightFiltersRelatedFindingsProductArnList,
SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn,
securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList,
SecurityhubInsightFiltersResourceAwsEc2InstanceImageId,
securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceImageIdToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList,
SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses,
securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesList,
SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses,
securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesList,
SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName,
securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList,
SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt,
securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList,
SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId,
securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList,
SecurityhubInsightFiltersResourceAwsEc2InstanceType,
securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceTypeToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList,
SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId,
securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform,
securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToHclTerraform,
SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList,
SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt,
securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform,
securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToHclTerraform,
SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList,
SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus,
securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform,
securityhubInsightFiltersResourceAwsIamAccessKeyStatusToHclTerraform,
SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList,
SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName,
securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform,
securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToHclTerraform,
SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList,
SecurityhubInsightFiltersResourceAwsS3BucketOwnerId,
securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform,
securityhubInsightFiltersResourceAwsS3BucketOwnerIdToHclTerraform,
SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList,
SecurityhubInsightFiltersResourceAwsS3BucketOwnerName,
securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform,
securityhubInsightFiltersResourceAwsS3BucketOwnerNameToHclTerraform,
SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList,
SecurityhubInsightFiltersResourceContainerImageId,
securityhubInsightFiltersResourceContainerImageIdToTerraform,
securityhubInsightFiltersResourceContainerImageIdToHclTerraform,
SecurityhubInsightFiltersResourceContainerImageIdList,
SecurityhubInsightFiltersResourceContainerImageName,
securityhubInsightFiltersResourceContainerImageNameToTerraform,
securityhubInsightFiltersResourceContainerImageNameToHclTerraform,
SecurityhubInsightFiltersResourceContainerImageNameList,
SecurityhubInsightFiltersResourceContainerLaunchedAt,
securityhubInsightFiltersResourceContainerLaunchedAtToTerraform,
securityhubInsightFiltersResourceContainerLaunchedAtToHclTerraform,
SecurityhubInsightFiltersResourceContainerLaunchedAtList,
SecurityhubInsightFiltersResourceContainerName,
securityhubInsightFiltersResourceContainerNameToTerraform,
securityhubInsightFiltersResourceContainerNameToHclTerraform,
SecurityhubInsightFiltersResourceContainerNameList,
SecurityhubInsightFiltersResourceDetailsOther,
securityhubInsightFiltersResourceDetailsOtherToTerraform,
securityhubInsightFiltersResourceDetailsOtherToHclTerraform,
SecurityhubInsightFiltersResourceDetailsOtherList,
SecurityhubInsightFiltersResourceId,
securityhubInsightFiltersResourceIdToTerraform,
securityhubInsightFiltersResourceIdToHclTerraform,
SecurityhubInsightFiltersResourceIdList,
SecurityhubInsightFiltersResourcePartition,
securityhubInsightFiltersResourcePartitionToTerraform,
securityhubInsightFiltersResourcePartitionToHclTerraform,
SecurityhubInsightFiltersResourcePartitionList,
SecurityhubInsightFiltersResourceRegion,
securityhubInsightFiltersResourceRegionToTerraform,
securityhubInsightFiltersResourceRegionToHclTerraform,
SecurityhubInsightFiltersResourceRegionList,
SecurityhubInsightFiltersResourceTags,
securityhubInsightFiltersResourceTagsToTerraform,
securityhubInsightFiltersResourceTagsToHclTerraform,
SecurityhubInsightFiltersResourceTagsList,
SecurityhubInsightFiltersResourceType,
securityhubInsightFiltersResourceTypeToTerraform,
securityhubInsightFiltersResourceTypeToHclTerraform,
SecurityhubInsightFiltersResourceTypeList,
SecurityhubInsightFiltersSeverityLabel,
securityhubInsightFiltersSeverityLabelToTerraform,
securityhubInsightFiltersSeverityLabelToHclTerraform,
SecurityhubInsightFiltersSeverityLabelList,
SecurityhubInsightFiltersSourceUrl,
securityhubInsightFiltersSourceUrlToTerraform,
securityhubInsightFiltersSourceUrlToHclTerraform,
SecurityhubInsightFiltersSourceUrlList,
SecurityhubInsightFiltersThreatIntelIndicatorCategory,
securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform,
securityhubInsightFiltersThreatIntelIndicatorCategoryToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorCategoryList,
SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt,
securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform,
securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList,
SecurityhubInsightFiltersThreatIntelIndicatorSource,
securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform,
securityhubInsightFiltersThreatIntelIndicatorSourceToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorSourceList,
SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl,
securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform,
securityhubInsightFiltersThreatIntelIndicatorSourceUrlToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList,
SecurityhubInsightFiltersThreatIntelIndicatorType,
securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform,
securityhubInsightFiltersThreatIntelIndicatorTypeToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorTypeList,
SecurityhubInsightFiltersThreatIntelIndicatorValue,
securityhubInsightFiltersThreatIntelIndicatorValueToTerraform,
securityhubInsightFiltersThreatIntelIndicatorValueToHclTerraform,
SecurityhubInsightFiltersThreatIntelIndicatorValueList,
SecurityhubInsightFiltersTitle,
securityhubInsightFiltersTitleToTerraform,
securityhubInsightFiltersTitleToHclTerraform,
SecurityhubInsightFiltersTitleList,
SecurityhubInsightFiltersType,
securityhubInsightFiltersTypeToTerraform,
securityhubInsightFiltersTypeToHclTerraform,
SecurityhubInsightFiltersTypeList,
SecurityhubInsightFiltersUpdatedAt,
securityhubInsightFiltersUpdatedAtToTerraform,
securityhubInsightFiltersUpdatedAtToHclTerraform,
SecurityhubInsightFiltersUpdatedAtList,
SecurityhubInsightFiltersUserDefinedValues,
securityhubInsightFiltersUserDefinedValuesToTerraform,
securityhubInsightFiltersUserDefinedValuesToHclTerraform,
SecurityhubInsightFiltersUserDefinedValuesList } from './structs0'
export interface SecurityhubInsightFiltersVerificationState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersVerificationStateToTerraform(struct?: SecurityhubInsightFiltersVerificationState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersVerificationStateToHclTerraform(struct?: SecurityhubInsightFiltersVerificationState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersVerificationStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersVerificationState | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersVerificationState | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityhubInsightFiltersVerificationStateList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersVerificationState[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersVerificationStateOutputReference {
    return new SecurityhubInsightFiltersVerificationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFiltersWorkflowStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersWorkflowStatusToTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityhubInsightFiltersWorkflowStatusToHclTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersWorkflowStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersWorkflowStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SecurityhubInsightFiltersWorkflowStatusList extends cdktn.ComplexList {
  public internalValue? : SecurityhubInsightFiltersWorkflowStatus[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SecurityhubInsightFiltersWorkflowStatusOutputReference {
    return new SecurityhubInsightFiltersWorkflowStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubInsightFilters {
  /**
  * aws_account_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#aws_account_id SecurityhubInsight#aws_account_id}
  */
  readonly awsAccountId?: SecurityhubInsightFiltersAwsAccountId[] | cdktn.IResolvable;
  /**
  * aws_account_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#aws_account_name SecurityhubInsight#aws_account_name}
  */
  readonly awsAccountName?: SecurityhubInsightFiltersAwsAccountName[] | cdktn.IResolvable;
  /**
  * company_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#company_name SecurityhubInsight#company_name}
  */
  readonly companyName?: SecurityhubInsightFiltersCompanyName[] | cdktn.IResolvable;
  /**
  * compliance_associated_standards_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#compliance_associated_standards_id SecurityhubInsight#compliance_associated_standards_id}
  */
  readonly complianceAssociatedStandardsId?: SecurityhubInsightFiltersComplianceAssociatedStandardsId[] | cdktn.IResolvable;
  /**
  * compliance_security_control_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#compliance_security_control_id SecurityhubInsight#compliance_security_control_id}
  */
  readonly complianceSecurityControlId?: SecurityhubInsightFiltersComplianceSecurityControlId[] | cdktn.IResolvable;
  /**
  * compliance_security_control_parameters_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#compliance_security_control_parameters_name SecurityhubInsight#compliance_security_control_parameters_name}
  */
  readonly complianceSecurityControlParametersName?: SecurityhubInsightFiltersComplianceSecurityControlParametersName[] | cdktn.IResolvable;
  /**
  * compliance_security_control_parameters_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#compliance_security_control_parameters_value SecurityhubInsight#compliance_security_control_parameters_value}
  */
  readonly complianceSecurityControlParametersValue?: SecurityhubInsightFiltersComplianceSecurityControlParametersValue[] | cdktn.IResolvable;
  /**
  * compliance_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#compliance_status SecurityhubInsight#compliance_status}
  */
  readonly complianceStatus?: SecurityhubInsightFiltersComplianceStatus[] | cdktn.IResolvable;
  /**
  * confidence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#confidence SecurityhubInsight#confidence}
  */
  readonly confidence?: SecurityhubInsightFiltersConfidence[] | cdktn.IResolvable;
  /**
  * created_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#created_at SecurityhubInsight#created_at}
  */
  readonly createdAt?: SecurityhubInsightFiltersCreatedAt[] | cdktn.IResolvable;
  /**
  * criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#criticality SecurityhubInsight#criticality}
  */
  readonly criticality?: SecurityhubInsightFiltersCriticality[] | cdktn.IResolvable;
  /**
  * description block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#description SecurityhubInsight#description}
  */
  readonly description?: SecurityhubInsightFiltersDescription[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_confidence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#finding_provider_fields_confidence SecurityhubInsight#finding_provider_fields_confidence}
  */
  readonly findingProviderFieldsConfidence?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_criticality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#finding_provider_fields_criticality SecurityhubInsight#finding_provider_fields_criticality}
  */
  readonly findingProviderFieldsCriticality?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_related_findings_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_id SecurityhubInsight#finding_provider_fields_related_findings_id}
  */
  readonly findingProviderFieldsRelatedFindingsId?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_related_findings_product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_product_arn SecurityhubInsight#finding_provider_fields_related_findings_product_arn}
  */
  readonly findingProviderFieldsRelatedFindingsProductArn?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_severity_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#finding_provider_fields_severity_label SecurityhubInsight#finding_provider_fields_severity_label}
  */
  readonly findingProviderFieldsSeverityLabel?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_severity_original block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#finding_provider_fields_severity_original SecurityhubInsight#finding_provider_fields_severity_original}
  */
  readonly findingProviderFieldsSeverityOriginal?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktn.IResolvable;
  /**
  * finding_provider_fields_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#finding_provider_fields_types SecurityhubInsight#finding_provider_fields_types}
  */
  readonly findingProviderFieldsTypes?: SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktn.IResolvable;
  /**
  * first_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#first_observed_at SecurityhubInsight#first_observed_at}
  */
  readonly firstObservedAt?: SecurityhubInsightFiltersFirstObservedAt[] | cdktn.IResolvable;
  /**
  * generator_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#generator_id SecurityhubInsight#generator_id}
  */
  readonly generatorId?: SecurityhubInsightFiltersGeneratorId[] | cdktn.IResolvable;
  /**
  * id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#id SecurityhubInsight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: SecurityhubInsightFiltersId[] | cdktn.IResolvable;
  /**
  * keyword block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#keyword SecurityhubInsight#keyword}
  */
  readonly keyword?: SecurityhubInsightFiltersKeyword[] | cdktn.IResolvable;
  /**
  * last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#last_observed_at SecurityhubInsight#last_observed_at}
  */
  readonly lastObservedAt?: SecurityhubInsightFiltersLastObservedAt[] | cdktn.IResolvable;
  /**
  * malware_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#malware_name SecurityhubInsight#malware_name}
  */
  readonly malwareName?: SecurityhubInsightFiltersMalwareName[] | cdktn.IResolvable;
  /**
  * malware_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#malware_path SecurityhubInsight#malware_path}
  */
  readonly malwarePath?: SecurityhubInsightFiltersMalwarePath[] | cdktn.IResolvable;
  /**
  * malware_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#malware_state SecurityhubInsight#malware_state}
  */
  readonly malwareState?: SecurityhubInsightFiltersMalwareState[] | cdktn.IResolvable;
  /**
  * malware_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#malware_type SecurityhubInsight#malware_type}
  */
  readonly malwareType?: SecurityhubInsightFiltersMalwareType[] | cdktn.IResolvable;
  /**
  * network_destination_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_destination_domain SecurityhubInsight#network_destination_domain}
  */
  readonly networkDestinationDomain?: SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktn.IResolvable;
  /**
  * network_destination_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_destination_ipv4 SecurityhubInsight#network_destination_ipv4}
  */
  readonly networkDestinationIpv4?: SecurityhubInsightFiltersNetworkDestinationIpv4[] | cdktn.IResolvable;
  /**
  * network_destination_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_destination_ipv6 SecurityhubInsight#network_destination_ipv6}
  */
  readonly networkDestinationIpv6?: SecurityhubInsightFiltersNetworkDestinationIpv6[] | cdktn.IResolvable;
  /**
  * network_destination_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_destination_port SecurityhubInsight#network_destination_port}
  */
  readonly networkDestinationPort?: SecurityhubInsightFiltersNetworkDestinationPort[] | cdktn.IResolvable;
  /**
  * network_direction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_direction SecurityhubInsight#network_direction}
  */
  readonly networkDirection?: SecurityhubInsightFiltersNetworkDirection[] | cdktn.IResolvable;
  /**
  * network_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_protocol SecurityhubInsight#network_protocol}
  */
  readonly networkProtocol?: SecurityhubInsightFiltersNetworkProtocol[] | cdktn.IResolvable;
  /**
  * network_source_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_source_domain SecurityhubInsight#network_source_domain}
  */
  readonly networkSourceDomain?: SecurityhubInsightFiltersNetworkSourceDomain[] | cdktn.IResolvable;
  /**
  * network_source_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_source_ipv4 SecurityhubInsight#network_source_ipv4}
  */
  readonly networkSourceIpv4?: SecurityhubInsightFiltersNetworkSourceIpv4[] | cdktn.IResolvable;
  /**
  * network_source_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_source_ipv6 SecurityhubInsight#network_source_ipv6}
  */
  readonly networkSourceIpv6?: SecurityhubInsightFiltersNetworkSourceIpv6[] | cdktn.IResolvable;
  /**
  * network_source_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_source_mac SecurityhubInsight#network_source_mac}
  */
  readonly networkSourceMac?: SecurityhubInsightFiltersNetworkSourceMac[] | cdktn.IResolvable;
  /**
  * network_source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#network_source_port SecurityhubInsight#network_source_port}
  */
  readonly networkSourcePort?: SecurityhubInsightFiltersNetworkSourcePort[] | cdktn.IResolvable;
  /**
  * note_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#note_text SecurityhubInsight#note_text}
  */
  readonly noteText?: SecurityhubInsightFiltersNoteText[] | cdktn.IResolvable;
  /**
  * note_updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#note_updated_at SecurityhubInsight#note_updated_at}
  */
  readonly noteUpdatedAt?: SecurityhubInsightFiltersNoteUpdatedAt[] | cdktn.IResolvable;
  /**
  * note_updated_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#note_updated_by SecurityhubInsight#note_updated_by}
  */
  readonly noteUpdatedBy?: SecurityhubInsightFiltersNoteUpdatedBy[] | cdktn.IResolvable;
  /**
  * process_launched_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#process_launched_at SecurityhubInsight#process_launched_at}
  */
  readonly processLaunchedAt?: SecurityhubInsightFiltersProcessLaunchedAt[] | cdktn.IResolvable;
  /**
  * process_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#process_name SecurityhubInsight#process_name}
  */
  readonly processName?: SecurityhubInsightFiltersProcessName[] | cdktn.IResolvable;
  /**
  * process_parent_pid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#process_parent_pid SecurityhubInsight#process_parent_pid}
  */
  readonly processParentPid?: SecurityhubInsightFiltersProcessParentPid[] | cdktn.IResolvable;
  /**
  * process_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#process_path SecurityhubInsight#process_path}
  */
  readonly processPath?: SecurityhubInsightFiltersProcessPath[] | cdktn.IResolvable;
  /**
  * process_pid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#process_pid SecurityhubInsight#process_pid}
  */
  readonly processPid?: SecurityhubInsightFiltersProcessPid[] | cdktn.IResolvable;
  /**
  * process_terminated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#process_terminated_at SecurityhubInsight#process_terminated_at}
  */
  readonly processTerminatedAt?: SecurityhubInsightFiltersProcessTerminatedAt[] | cdktn.IResolvable;
  /**
  * product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#product_arn SecurityhubInsight#product_arn}
  */
  readonly productArn?: SecurityhubInsightFiltersProductArn[] | cdktn.IResolvable;
  /**
  * product_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#product_fields SecurityhubInsight#product_fields}
  */
  readonly productFields?: SecurityhubInsightFiltersProductFields[] | cdktn.IResolvable;
  /**
  * product_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#product_name SecurityhubInsight#product_name}
  */
  readonly productName?: SecurityhubInsightFiltersProductName[] | cdktn.IResolvable;
  /**
  * recommendation_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#recommendation_text SecurityhubInsight#recommendation_text}
  */
  readonly recommendationText?: SecurityhubInsightFiltersRecommendationText[] | cdktn.IResolvable;
  /**
  * record_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#record_state SecurityhubInsight#record_state}
  */
  readonly recordState?: SecurityhubInsightFiltersRecordState[] | cdktn.IResolvable;
  /**
  * related_findings_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#related_findings_id SecurityhubInsight#related_findings_id}
  */
  readonly relatedFindingsId?: SecurityhubInsightFiltersRelatedFindingsId[] | cdktn.IResolvable;
  /**
  * related_findings_product_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#related_findings_product_arn SecurityhubInsight#related_findings_product_arn}
  */
  readonly relatedFindingsProductArn?: SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_iam_instance_profile_arn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_iam_instance_profile_arn SecurityhubInsight#resource_aws_ec2_instance_iam_instance_profile_arn}
  */
  readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_image_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_image_id SecurityhubInsight#resource_aws_ec2_instance_image_id}
  */
  readonly resourceAwsEc2InstanceImageId?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_ipv4_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_ipv4_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv4_addresses}
  */
  readonly resourceAwsEc2InstanceIpv4Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_ipv6_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_ipv6_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv6_addresses}
  */
  readonly resourceAwsEc2InstanceIpv6Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_key_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_key_name SecurityhubInsight#resource_aws_ec2_instance_key_name}
  */
  readonly resourceAwsEc2InstanceKeyName?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_launched_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_launched_at SecurityhubInsight#resource_aws_ec2_instance_launched_at}
  */
  readonly resourceAwsEc2InstanceLaunchedAt?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_subnet_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_subnet_id SecurityhubInsight#resource_aws_ec2_instance_subnet_id}
  */
  readonly resourceAwsEc2InstanceSubnetId?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_type SecurityhubInsight#resource_aws_ec2_instance_type}
  */
  readonly resourceAwsEc2InstanceType?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktn.IResolvable;
  /**
  * resource_aws_ec2_instance_vpc_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_ec2_instance_vpc_id SecurityhubInsight#resource_aws_ec2_instance_vpc_id}
  */
  readonly resourceAwsEc2InstanceVpcId?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktn.IResolvable;
  /**
  * resource_aws_iam_access_key_created_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_created_at SecurityhubInsight#resource_aws_iam_access_key_created_at}
  */
  readonly resourceAwsIamAccessKeyCreatedAt?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktn.IResolvable;
  /**
  * resource_aws_iam_access_key_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_status SecurityhubInsight#resource_aws_iam_access_key_status}
  */
  readonly resourceAwsIamAccessKeyStatus?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktn.IResolvable;
  /**
  * resource_aws_iam_access_key_user_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_user_name SecurityhubInsight#resource_aws_iam_access_key_user_name}
  */
  readonly resourceAwsIamAccessKeyUserName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktn.IResolvable;
  /**
  * resource_aws_s3_bucket_owner_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_id SecurityhubInsight#resource_aws_s3_bucket_owner_id}
  */
  readonly resourceAwsS3BucketOwnerId?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktn.IResolvable;
  /**
  * resource_aws_s3_bucket_owner_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_name SecurityhubInsight#resource_aws_s3_bucket_owner_name}
  */
  readonly resourceAwsS3BucketOwnerName?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktn.IResolvable;
  /**
  * resource_container_image_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_container_image_id SecurityhubInsight#resource_container_image_id}
  */
  readonly resourceContainerImageId?: SecurityhubInsightFiltersResourceContainerImageId[] | cdktn.IResolvable;
  /**
  * resource_container_image_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_container_image_name SecurityhubInsight#resource_container_image_name}
  */
  readonly resourceContainerImageName?: SecurityhubInsightFiltersResourceContainerImageName[] | cdktn.IResolvable;
  /**
  * resource_container_launched_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_container_launched_at SecurityhubInsight#resource_container_launched_at}
  */
  readonly resourceContainerLaunchedAt?: SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktn.IResolvable;
  /**
  * resource_container_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_container_name SecurityhubInsight#resource_container_name}
  */
  readonly resourceContainerName?: SecurityhubInsightFiltersResourceContainerName[] | cdktn.IResolvable;
  /**
  * resource_details_other block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_details_other SecurityhubInsight#resource_details_other}
  */
  readonly resourceDetailsOther?: SecurityhubInsightFiltersResourceDetailsOther[] | cdktn.IResolvable;
  /**
  * resource_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_id SecurityhubInsight#resource_id}
  */
  readonly resourceId?: SecurityhubInsightFiltersResourceId[] | cdktn.IResolvable;
  /**
  * resource_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_partition SecurityhubInsight#resource_partition}
  */
  readonly resourcePartition?: SecurityhubInsightFiltersResourcePartition[] | cdktn.IResolvable;
  /**
  * resource_region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_region SecurityhubInsight#resource_region}
  */
  readonly resourceRegion?: SecurityhubInsightFiltersResourceRegion[] | cdktn.IResolvable;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_tags SecurityhubInsight#resource_tags}
  */
  readonly resourceTags?: SecurityhubInsightFiltersResourceTags[] | cdktn.IResolvable;
  /**
  * resource_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#resource_type SecurityhubInsight#resource_type}
  */
  readonly resourceType?: SecurityhubInsightFiltersResourceType[] | cdktn.IResolvable;
  /**
  * severity_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#severity_label SecurityhubInsight#severity_label}
  */
  readonly severityLabel?: SecurityhubInsightFiltersSeverityLabel[] | cdktn.IResolvable;
  /**
  * source_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#source_url SecurityhubInsight#source_url}
  */
  readonly sourceUrl?: SecurityhubInsightFiltersSourceUrl[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#threat_intel_indicator_category SecurityhubInsight#threat_intel_indicator_category}
  */
  readonly threatIntelIndicatorCategory?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_last_observed_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#threat_intel_indicator_last_observed_at SecurityhubInsight#threat_intel_indicator_last_observed_at}
  */
  readonly threatIntelIndicatorLastObservedAt?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#threat_intel_indicator_source SecurityhubInsight#threat_intel_indicator_source}
  */
  readonly threatIntelIndicatorSource?: SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_source_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#threat_intel_indicator_source_url SecurityhubInsight#threat_intel_indicator_source_url}
  */
  readonly threatIntelIndicatorSourceUrl?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#threat_intel_indicator_type SecurityhubInsight#threat_intel_indicator_type}
  */
  readonly threatIntelIndicatorType?: SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktn.IResolvable;
  /**
  * threat_intel_indicator_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#threat_intel_indicator_value SecurityhubInsight#threat_intel_indicator_value}
  */
  readonly threatIntelIndicatorValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktn.IResolvable;
  /**
  * title block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#title SecurityhubInsight#title}
  */
  readonly title?: SecurityhubInsightFiltersTitle[] | cdktn.IResolvable;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#type SecurityhubInsight#type}
  */
  readonly type?: SecurityhubInsightFiltersType[] | cdktn.IResolvable;
  /**
  * updated_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#updated_at SecurityhubInsight#updated_at}
  */
  readonly updatedAt?: SecurityhubInsightFiltersUpdatedAt[] | cdktn.IResolvable;
  /**
  * user_defined_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#user_defined_values SecurityhubInsight#user_defined_values}
  */
  readonly userDefinedValues?: SecurityhubInsightFiltersUserDefinedValues[] | cdktn.IResolvable;
  /**
  * verification_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#verification_state SecurityhubInsight#verification_state}
  */
  readonly verificationState?: SecurityhubInsightFiltersVerificationState[] | cdktn.IResolvable;
  /**
  * workflow_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.39.0/docs/resources/securityhub_insight#workflow_status SecurityhubInsight#workflow_status}
  */
  readonly workflowStatus?: SecurityhubInsightFiltersWorkflowStatus[] | cdktn.IResolvable;
}

export function securityhubInsightFiltersToTerraform(struct?: SecurityhubInsightFiltersOutputReference | SecurityhubInsightFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_id: cdktn.listMapper(securityhubInsightFiltersAwsAccountIdToTerraform, true)(struct!.awsAccountId),
    aws_account_name: cdktn.listMapper(securityhubInsightFiltersAwsAccountNameToTerraform, true)(struct!.awsAccountName),
    company_name: cdktn.listMapper(securityhubInsightFiltersCompanyNameToTerraform, true)(struct!.companyName),
    compliance_associated_standards_id: cdktn.listMapper(securityhubInsightFiltersComplianceAssociatedStandardsIdToTerraform, true)(struct!.complianceAssociatedStandardsId),
    compliance_security_control_id: cdktn.listMapper(securityhubInsightFiltersComplianceSecurityControlIdToTerraform, true)(struct!.complianceSecurityControlId),
    compliance_security_control_parameters_name: cdktn.listMapper(securityhubInsightFiltersComplianceSecurityControlParametersNameToTerraform, true)(struct!.complianceSecurityControlParametersName),
    compliance_security_control_parameters_value: cdktn.listMapper(securityhubInsightFiltersComplianceSecurityControlParametersValueToTerraform, true)(struct!.complianceSecurityControlParametersValue),
    compliance_status: cdktn.listMapper(securityhubInsightFiltersComplianceStatusToTerraform, true)(struct!.complianceStatus),
    confidence: cdktn.listMapper(securityhubInsightFiltersConfidenceToTerraform, true)(struct!.confidence),
    created_at: cdktn.listMapper(securityhubInsightFiltersCreatedAtToTerraform, true)(struct!.createdAt),
    criticality: cdktn.listMapper(securityhubInsightFiltersCriticalityToTerraform, true)(struct!.criticality),
    description: cdktn.listMapper(securityhubInsightFiltersDescriptionToTerraform, true)(struct!.description),
    finding_provider_fields_confidence: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform, true)(struct!.findingProviderFieldsConfidence),
    finding_provider_fields_criticality: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform, true)(struct!.findingProviderFieldsCriticality),
    finding_provider_fields_related_findings_id: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform, true)(struct!.findingProviderFieldsRelatedFindingsId),
    finding_provider_fields_related_findings_product_arn: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform, true)(struct!.findingProviderFieldsRelatedFindingsProductArn),
    finding_provider_fields_severity_label: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform, true)(struct!.findingProviderFieldsSeverityLabel),
    finding_provider_fields_severity_original: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform, true)(struct!.findingProviderFieldsSeverityOriginal),
    finding_provider_fields_types: cdktn.listMapper(securityhubInsightFiltersFindingProviderFieldsTypesToTerraform, true)(struct!.findingProviderFieldsTypes),
    first_observed_at: cdktn.listMapper(securityhubInsightFiltersFirstObservedAtToTerraform, true)(struct!.firstObservedAt),
    generator_id: cdktn.listMapper(securityhubInsightFiltersGeneratorIdToTerraform, true)(struct!.generatorId),
    id: cdktn.listMapper(securityhubInsightFiltersIdToTerraform, true)(struct!.id),
    keyword: cdktn.listMapper(securityhubInsightFiltersKeywordToTerraform, true)(struct!.keyword),
    last_observed_at: cdktn.listMapper(securityhubInsightFiltersLastObservedAtToTerraform, true)(struct!.lastObservedAt),
    malware_name: cdktn.listMapper(securityhubInsightFiltersMalwareNameToTerraform, true)(struct!.malwareName),
    malware_path: cdktn.listMapper(securityhubInsightFiltersMalwarePathToTerraform, true)(struct!.malwarePath),
    malware_state: cdktn.listMapper(securityhubInsightFiltersMalwareStateToTerraform, true)(struct!.malwareState),
    malware_type: cdktn.listMapper(securityhubInsightFiltersMalwareTypeToTerraform, true)(struct!.malwareType),
    network_destination_domain: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationDomainToTerraform, true)(struct!.networkDestinationDomain),
    network_destination_ipv4: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationIpv4ToTerraform, true)(struct!.networkDestinationIpv4),
    network_destination_ipv6: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationIpv6ToTerraform, true)(struct!.networkDestinationIpv6),
    network_destination_port: cdktn.listMapper(securityhubInsightFiltersNetworkDestinationPortToTerraform, true)(struct!.networkDestinationPort),
    network_direction: cdktn.listMapper(securityhubInsightFiltersNetworkDirectionToTerraform, true)(struct!.networkDirection),
    network_protocol: cdktn.listMapper(securityhubInsightFiltersNetworkProtocolToTerraform, true)(struct!.networkProtocol),
    network_source_domain: cdktn.listMapper(securityhubInsightFiltersNetworkSourceDomainToTerraform, true)(struct!.networkSourceDomain),
    network_source_ipv4: cdktn.listMapper(securityhubInsightFiltersNetworkSourceIpv4ToTerraform, true)(struct!.networkSourceIpv4),
    network_source_ipv6: cdktn.listMapper(securityhubInsightFiltersNetworkSourceIpv6ToTerraform, true)(struct!.networkSourceIpv6),
    network_source_mac: cdktn.listMapper(securityhubInsightFiltersNetworkSourceMacToTerraform, true)(struct!.networkSourceMac),
    network_source_port: cdktn.listMapper(securityhubInsightFiltersNetworkSourcePortToTerraform, true)(struct!.networkSourcePort),
    note_text: cdktn.listMapper(securityhubInsightFiltersNoteTextToTerraform, true)(struct!.noteText),
    note_updated_at: cdktn.listMapper(securityhubInsightFiltersNoteUpdatedAtToTerraform, true)(struct!.noteUpdatedAt),
    note_updated_by: cdktn.listMapper(securityhubInsightFiltersNoteUpdatedByToTerraform, true)(struct!.noteUpdatedBy),
    process_launched_at: cdktn.listMapper(securityhubInsightFiltersProcessLaunchedAtToTerraform, true)(struct!.processLaunchedAt),
    process_name: cdktn.listMapper(securityhubInsightFiltersProcessNameToTerraform, true)(struct!.processName),
    process_parent_pid: cdktn.listMapper(securityhubInsightFiltersProcessParentPidToTerraform, true)(struct!.processParentPid),
    process_path: cdktn.listMapper(securityhubInsightFiltersProcessPathToTerraform, true)(struct!.processPath),
    process_pid: cdktn.listMapper(securityhubInsightFiltersProcessPidToTerraform, true)(struct!.processPid),
    process_terminated_at: cdktn.listMapper(securityhubInsightFiltersProcessTerminatedAtToTerraform, true)(struct!.processTerminatedAt),
    product_arn: cdktn.listMapper(securityhubInsightFiltersProductArnToTerraform, true)(struct!.productArn),
    product_fields: cdktn.listMapper(securityhubInsightFiltersProductFieldsToTerraform, true)(struct!.productFields),
    product_name: cdktn.listMapper(securityhubInsightFiltersProductNameToTerraform, true)(struct!.productName),
    recommendation_text: cdktn.listMapper(securityhubInsightFiltersRecommendationTextToTerraform, true)(struct!.recommendationText),
    record_state: cdktn.listMapper(securityhubInsightFiltersRecordStateToTerraform, true)(struct!.recordState),
    related_findings_id: cdktn.listMapper(securityhubInsightFiltersRelatedFindingsIdToTerraform, true)(struct!.relatedFindingsId),
    related_findings_product_arn: cdktn.listMapper(securityhubInsightFiltersRelatedFindingsProductArnToTerraform, true)(struct!.relatedFindingsProductArn),
    resource_aws_ec2_instance_iam_instance_profile_arn: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform, true)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
    resource_aws_ec2_instance_image_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform, true)(struct!.resourceAwsEc2InstanceImageId),
    resource_aws_ec2_instance_ipv4_addresses: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform, true)(struct!.resourceAwsEc2InstanceIpv4Addresses),
    resource_aws_ec2_instance_ipv6_addresses: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform, true)(struct!.resourceAwsEc2InstanceIpv6Addresses),
    resource_aws_ec2_instance_key_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform, true)(struct!.resourceAwsEc2InstanceKeyName),
    resource_aws_ec2_instance_launched_at: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform, true)(struct!.resourceAwsEc2InstanceLaunchedAt),
    resource_aws_ec2_instance_subnet_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform, true)(struct!.resourceAwsEc2InstanceSubnetId),
    resource_aws_ec2_instance_type: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform, true)(struct!.resourceAwsEc2InstanceType),
    resource_aws_ec2_instance_vpc_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform, true)(struct!.resourceAwsEc2InstanceVpcId),
    resource_aws_iam_access_key_created_at: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform, true)(struct!.resourceAwsIamAccessKeyCreatedAt),
    resource_aws_iam_access_key_status: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform, true)(struct!.resourceAwsIamAccessKeyStatus),
    resource_aws_iam_access_key_user_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform, true)(struct!.resourceAwsIamAccessKeyUserName),
    resource_aws_s3_bucket_owner_id: cdktn.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform, true)(struct!.resourceAwsS3BucketOwnerId),
    resource_aws_s3_bucket_owner_name: cdktn.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform, true)(struct!.resourceAwsS3BucketOwnerName),
    resource_container_image_id: cdktn.listMapper(securityhubInsightFiltersResourceContainerImageIdToTerraform, true)(struct!.resourceContainerImageId),
    resource_container_image_name: cdktn.listMapper(securityhubInsightFiltersResourceContainerImageNameToTerraform, true)(struct!.resourceContainerImageName),
    resource_container_launched_at: cdktn.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtToTerraform, true)(struct!.resourceContainerLaunchedAt),
    resource_container_name: cdktn.listMapper(securityhubInsightFiltersResourceContainerNameToTerraform, true)(struct!.resourceContainerName),
    resource_details_other: cdktn.listMapper(securityhubInsightFiltersResourceDetailsOtherToTerraform, true)(struct!.resourceDetailsOther),
    resource_id: cdktn.listMapper(securityhubInsightFiltersResourceIdToTerraform, true)(struct!.resourceId),
    resource_partition: cdktn.listMapper(securityhubInsightFiltersResourcePartitionToTerraform, true)(struct!.resourcePartition),
    resource_region: cdktn.listMapper(securityhubInsightFiltersResourceRegionToTerraform, true)(struct!.resourceRegion),
    resource_tags: cdktn.listMapper(securityhubInsightFiltersResourceTagsToTerraform, true)(struct!.resourceTags),
    resource_type: cdktn.listMapper(securityhubInsightFiltersResourceTypeToTerraform, true)(struct!.resourceType),
    severity_label: cdktn.listMapper(securityhubInsightFiltersSeverityLabelToTerraform, true)(struct!.severityLabel),
    source_url: cdktn.listMapper(securityhubInsightFiltersSourceUrlToTerraform, true)(struct!.sourceUrl),
    threat_intel_indicator_category: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform, true)(struct!.threatIntelIndicatorCategory),
    threat_intel_indicator_last_observed_at: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform, true)(struct!.threatIntelIndicatorLastObservedAt),
    threat_intel_indicator_source: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform, true)(struct!.threatIntelIndicatorSource),
    threat_intel_indicator_source_url: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform, true)(struct!.threatIntelIndicatorSourceUrl),
    threat_intel_indicator_type: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform, true)(struct!.threatIntelIndicatorType),
    threat_intel_indicator_value: cdktn.listMapper(securityhubInsightFiltersThreatIntelIndicatorValueToTerraform, true)(struct!.threatIntelIndicatorValue),
    title: cdktn.listMapper(securityhubInsightFiltersTitleToTerraform, true)(struct!.title),
    type: cdktn.listMapper(securityhubInsightFiltersTypeToTerraform, true)(struct!.type),
    updated_at: cdktn.listMapper(securityhubInsightFiltersUpdatedAtToTerraform, true)(struct!.updatedAt),
    user_defined_values: cdktn.listMapper(securityhubInsightFiltersUserDefinedValuesToTerraform, true)(struct!.userDefinedValues),
    verification_state: cdktn.listMapper(securityhubInsightFiltersVerificationStateToTerraform, true)(struct!.verificationState),
    workflow_status: cdktn.listMapper(securityhubInsightFiltersWorkflowStatusToTerraform, true)(struct!.workflowStatus),
  }
}


export function securityhubInsightFiltersToHclTerraform(struct?: SecurityhubInsightFiltersOutputReference | SecurityhubInsightFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersAwsAccountIdToHclTerraform, true)(struct!.awsAccountId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersAwsAccountIdList",
    },
    aws_account_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersAwsAccountNameToHclTerraform, true)(struct!.awsAccountName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersAwsAccountNameList",
    },
    company_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersCompanyNameToHclTerraform, true)(struct!.companyName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersCompanyNameList",
    },
    compliance_associated_standards_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceAssociatedStandardsIdToHclTerraform, true)(struct!.complianceAssociatedStandardsId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersComplianceAssociatedStandardsIdList",
    },
    compliance_security_control_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceSecurityControlIdToHclTerraform, true)(struct!.complianceSecurityControlId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersComplianceSecurityControlIdList",
    },
    compliance_security_control_parameters_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceSecurityControlParametersNameToHclTerraform, true)(struct!.complianceSecurityControlParametersName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersComplianceSecurityControlParametersNameList",
    },
    compliance_security_control_parameters_value: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceSecurityControlParametersValueToHclTerraform, true)(struct!.complianceSecurityControlParametersValue),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersComplianceSecurityControlParametersValueList",
    },
    compliance_status: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersComplianceStatusToHclTerraform, true)(struct!.complianceStatus),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersComplianceStatusList",
    },
    confidence: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersConfidenceToHclTerraform, true)(struct!.confidence),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersConfidenceList",
    },
    created_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersCreatedAtToHclTerraform, true)(struct!.createdAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersCreatedAtList",
    },
    criticality: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersCriticalityToHclTerraform, true)(struct!.criticality),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersCriticalityList",
    },
    description: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersDescriptionToHclTerraform, true)(struct!.description),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersDescriptionList",
    },
    finding_provider_fields_confidence: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsConfidenceToHclTerraform, true)(struct!.findingProviderFieldsConfidence),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsConfidenceList",
    },
    finding_provider_fields_criticality: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsCriticalityToHclTerraform, true)(struct!.findingProviderFieldsCriticality),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsCriticalityList",
    },
    finding_provider_fields_related_findings_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToHclTerraform, true)(struct!.findingProviderFieldsRelatedFindingsId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList",
    },
    finding_provider_fields_related_findings_product_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToHclTerraform, true)(struct!.findingProviderFieldsRelatedFindingsProductArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList",
    },
    finding_provider_fields_severity_label: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToHclTerraform, true)(struct!.findingProviderFieldsSeverityLabel),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList",
    },
    finding_provider_fields_severity_original: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToHclTerraform, true)(struct!.findingProviderFieldsSeverityOriginal),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList",
    },
    finding_provider_fields_types: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFindingProviderFieldsTypesToHclTerraform, true)(struct!.findingProviderFieldsTypes),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFindingProviderFieldsTypesList",
    },
    first_observed_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersFirstObservedAtToHclTerraform, true)(struct!.firstObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersFirstObservedAtList",
    },
    generator_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersGeneratorIdToHclTerraform, true)(struct!.generatorId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersGeneratorIdList",
    },
    id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersIdToHclTerraform, true)(struct!.id),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersIdList",
    },
    keyword: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersKeywordToHclTerraform, true)(struct!.keyword),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersKeywordList",
    },
    last_observed_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersLastObservedAtToHclTerraform, true)(struct!.lastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersLastObservedAtList",
    },
    malware_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwareNameToHclTerraform, true)(struct!.malwareName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersMalwareNameList",
    },
    malware_path: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwarePathToHclTerraform, true)(struct!.malwarePath),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersMalwarePathList",
    },
    malware_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwareStateToHclTerraform, true)(struct!.malwareState),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersMalwareStateList",
    },
    malware_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersMalwareTypeToHclTerraform, true)(struct!.malwareType),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersMalwareTypeList",
    },
    network_destination_domain: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationDomainToHclTerraform, true)(struct!.networkDestinationDomain),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationDomainList",
    },
    network_destination_ipv4: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationIpv4ToHclTerraform, true)(struct!.networkDestinationIpv4),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationIpv4List",
    },
    network_destination_ipv6: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationIpv6ToHclTerraform, true)(struct!.networkDestinationIpv6),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationIpv6List",
    },
    network_destination_port: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDestinationPortToHclTerraform, true)(struct!.networkDestinationPort),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDestinationPortList",
    },
    network_direction: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkDirectionToHclTerraform, true)(struct!.networkDirection),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkDirectionList",
    },
    network_protocol: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkProtocolToHclTerraform, true)(struct!.networkProtocol),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkProtocolList",
    },
    network_source_domain: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceDomainToHclTerraform, true)(struct!.networkSourceDomain),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceDomainList",
    },
    network_source_ipv4: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceIpv4ToHclTerraform, true)(struct!.networkSourceIpv4),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceIpv4List",
    },
    network_source_ipv6: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceIpv6ToHclTerraform, true)(struct!.networkSourceIpv6),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceIpv6List",
    },
    network_source_mac: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourceMacToHclTerraform, true)(struct!.networkSourceMac),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourceMacList",
    },
    network_source_port: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNetworkSourcePortToHclTerraform, true)(struct!.networkSourcePort),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNetworkSourcePortList",
    },
    note_text: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNoteTextToHclTerraform, true)(struct!.noteText),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNoteTextList",
    },
    note_updated_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNoteUpdatedAtToHclTerraform, true)(struct!.noteUpdatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNoteUpdatedAtList",
    },
    note_updated_by: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersNoteUpdatedByToHclTerraform, true)(struct!.noteUpdatedBy),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersNoteUpdatedByList",
    },
    process_launched_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessLaunchedAtToHclTerraform, true)(struct!.processLaunchedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessLaunchedAtList",
    },
    process_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessNameToHclTerraform, true)(struct!.processName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessNameList",
    },
    process_parent_pid: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessParentPidToHclTerraform, true)(struct!.processParentPid),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessParentPidList",
    },
    process_path: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessPathToHclTerraform, true)(struct!.processPath),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessPathList",
    },
    process_pid: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessPidToHclTerraform, true)(struct!.processPid),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessPidList",
    },
    process_terminated_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProcessTerminatedAtToHclTerraform, true)(struct!.processTerminatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProcessTerminatedAtList",
    },
    product_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProductArnToHclTerraform, true)(struct!.productArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProductArnList",
    },
    product_fields: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProductFieldsToHclTerraform, true)(struct!.productFields),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProductFieldsList",
    },
    product_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersProductNameToHclTerraform, true)(struct!.productName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersProductNameList",
    },
    recommendation_text: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRecommendationTextToHclTerraform, true)(struct!.recommendationText),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersRecommendationTextList",
    },
    record_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRecordStateToHclTerraform, true)(struct!.recordState),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersRecordStateList",
    },
    related_findings_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRelatedFindingsIdToHclTerraform, true)(struct!.relatedFindingsId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersRelatedFindingsIdList",
    },
    related_findings_product_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersRelatedFindingsProductArnToHclTerraform, true)(struct!.relatedFindingsProductArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersRelatedFindingsProductArnList",
    },
    resource_aws_ec2_instance_iam_instance_profile_arn: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToHclTerraform, true)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList",
    },
    resource_aws_ec2_instance_image_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToHclTerraform, true)(struct!.resourceAwsEc2InstanceImageId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList",
    },
    resource_aws_ec2_instance_ipv4_addresses: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToHclTerraform, true)(struct!.resourceAwsEc2InstanceIpv4Addresses),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesList",
    },
    resource_aws_ec2_instance_ipv6_addresses: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToHclTerraform, true)(struct!.resourceAwsEc2InstanceIpv6Addresses),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesList",
    },
    resource_aws_ec2_instance_key_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToHclTerraform, true)(struct!.resourceAwsEc2InstanceKeyName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList",
    },
    resource_aws_ec2_instance_launched_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToHclTerraform, true)(struct!.resourceAwsEc2InstanceLaunchedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList",
    },
    resource_aws_ec2_instance_subnet_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToHclTerraform, true)(struct!.resourceAwsEc2InstanceSubnetId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList",
    },
    resource_aws_ec2_instance_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceTypeToHclTerraform, true)(struct!.resourceAwsEc2InstanceType),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList",
    },
    resource_aws_ec2_instance_vpc_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToHclTerraform, true)(struct!.resourceAwsEc2InstanceVpcId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList",
    },
    resource_aws_iam_access_key_created_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToHclTerraform, true)(struct!.resourceAwsIamAccessKeyCreatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList",
    },
    resource_aws_iam_access_key_status: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToHclTerraform, true)(struct!.resourceAwsIamAccessKeyStatus),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList",
    },
    resource_aws_iam_access_key_user_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToHclTerraform, true)(struct!.resourceAwsIamAccessKeyUserName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList",
    },
    resource_aws_s3_bucket_owner_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToHclTerraform, true)(struct!.resourceAwsS3BucketOwnerId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList",
    },
    resource_aws_s3_bucket_owner_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToHclTerraform, true)(struct!.resourceAwsS3BucketOwnerName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList",
    },
    resource_container_image_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerImageIdToHclTerraform, true)(struct!.resourceContainerImageId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceContainerImageIdList",
    },
    resource_container_image_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerImageNameToHclTerraform, true)(struct!.resourceContainerImageName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceContainerImageNameList",
    },
    resource_container_launched_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerLaunchedAtToHclTerraform, true)(struct!.resourceContainerLaunchedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceContainerLaunchedAtList",
    },
    resource_container_name: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceContainerNameToHclTerraform, true)(struct!.resourceContainerName),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceContainerNameList",
    },
    resource_details_other: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceDetailsOtherToHclTerraform, true)(struct!.resourceDetailsOther),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceDetailsOtherList",
    },
    resource_id: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceIdToHclTerraform, true)(struct!.resourceId),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceIdList",
    },
    resource_partition: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourcePartitionToHclTerraform, true)(struct!.resourcePartition),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourcePartitionList",
    },
    resource_region: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceRegionToHclTerraform, true)(struct!.resourceRegion),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceRegionList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceTagsToHclTerraform, true)(struct!.resourceTags),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceTagsList",
    },
    resource_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersResourceTypeToHclTerraform, true)(struct!.resourceType),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersResourceTypeList",
    },
    severity_label: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersSeverityLabelToHclTerraform, true)(struct!.severityLabel),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersSeverityLabelList",
    },
    source_url: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersSourceUrlToHclTerraform, true)(struct!.sourceUrl),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersSourceUrlList",
    },
    threat_intel_indicator_category: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorCategoryToHclTerraform, true)(struct!.threatIntelIndicatorCategory),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorCategoryList",
    },
    threat_intel_indicator_last_observed_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToHclTerraform, true)(struct!.threatIntelIndicatorLastObservedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList",
    },
    threat_intel_indicator_source: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorSourceToHclTerraform, true)(struct!.threatIntelIndicatorSource),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorSourceList",
    },
    threat_intel_indicator_source_url: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToHclTerraform, true)(struct!.threatIntelIndicatorSourceUrl),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList",
    },
    threat_intel_indicator_type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorTypeToHclTerraform, true)(struct!.threatIntelIndicatorType),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorTypeList",
    },
    threat_intel_indicator_value: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersThreatIntelIndicatorValueToHclTerraform, true)(struct!.threatIntelIndicatorValue),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersThreatIntelIndicatorValueList",
    },
    title: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersTitleToHclTerraform, true)(struct!.title),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersTitleList",
    },
    type: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersTypeToHclTerraform, true)(struct!.type),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersTypeList",
    },
    updated_at: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersUpdatedAtToHclTerraform, true)(struct!.updatedAt),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersUpdatedAtList",
    },
    user_defined_values: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersUserDefinedValuesToHclTerraform, true)(struct!.userDefinedValues),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersUserDefinedValuesList",
    },
    verification_state: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersVerificationStateToHclTerraform, true)(struct!.verificationState),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersVerificationStateList",
    },
    workflow_status: {
      value: cdktn.listMapperHcl(securityhubInsightFiltersWorkflowStatusToHclTerraform, true)(struct!.workflowStatus),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityhubInsightFiltersWorkflowStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubInsightFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityhubInsightFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
    }
    if (this._awsAccountName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountName = this._awsAccountName?.internalValue;
    }
    if (this._companyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName?.internalValue;
    }
    if (this._complianceAssociatedStandardsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceAssociatedStandardsId = this._complianceAssociatedStandardsId?.internalValue;
    }
    if (this._complianceSecurityControlId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlId = this._complianceSecurityControlId?.internalValue;
    }
    if (this._complianceSecurityControlParametersName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlParametersName = this._complianceSecurityControlParametersName?.internalValue;
    }
    if (this._complianceSecurityControlParametersValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceSecurityControlParametersValue = this._complianceSecurityControlParametersValue?.internalValue;
    }
    if (this._complianceStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStatus = this._complianceStatus?.internalValue;
    }
    if (this._confidence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidence = this._confidence?.internalValue;
    }
    if (this._createdAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt?.internalValue;
    }
    if (this._criticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality?.internalValue;
    }
    if (this._description?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._findingProviderFieldsConfidence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsConfidence = this._findingProviderFieldsConfidence?.internalValue;
    }
    if (this._findingProviderFieldsCriticality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsCriticality = this._findingProviderFieldsCriticality?.internalValue;
    }
    if (this._findingProviderFieldsRelatedFindingsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsId = this._findingProviderFieldsRelatedFindingsId?.internalValue;
    }
    if (this._findingProviderFieldsRelatedFindingsProductArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsProductArn = this._findingProviderFieldsRelatedFindingsProductArn?.internalValue;
    }
    if (this._findingProviderFieldsSeverityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityLabel = this._findingProviderFieldsSeverityLabel?.internalValue;
    }
    if (this._findingProviderFieldsSeverityOriginal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityOriginal = this._findingProviderFieldsSeverityOriginal?.internalValue;
    }
    if (this._findingProviderFieldsTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsTypes = this._findingProviderFieldsTypes?.internalValue;
    }
    if (this._firstObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
    }
    if (this._generatorId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatorId = this._generatorId?.internalValue;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._keyword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword?.internalValue;
    }
    if (this._lastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
    }
    if (this._malwareName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareName = this._malwareName?.internalValue;
    }
    if (this._malwarePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwarePath = this._malwarePath?.internalValue;
    }
    if (this._malwareState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareState = this._malwareState?.internalValue;
    }
    if (this._malwareType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareType = this._malwareType?.internalValue;
    }
    if (this._networkDestinationDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationDomain = this._networkDestinationDomain?.internalValue;
    }
    if (this._networkDestinationIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpv4 = this._networkDestinationIpv4?.internalValue;
    }
    if (this._networkDestinationIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpv6 = this._networkDestinationIpv6?.internalValue;
    }
    if (this._networkDestinationPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDestinationPort = this._networkDestinationPort?.internalValue;
    }
    if (this._networkDirection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDirection = this._networkDirection?.internalValue;
    }
    if (this._networkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol?.internalValue;
    }
    if (this._networkSourceDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceDomain = this._networkSourceDomain?.internalValue;
    }
    if (this._networkSourceIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpv4 = this._networkSourceIpv4?.internalValue;
    }
    if (this._networkSourceIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpv6 = this._networkSourceIpv6?.internalValue;
    }
    if (this._networkSourceMac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourceMac = this._networkSourceMac?.internalValue;
    }
    if (this._networkSourcePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSourcePort = this._networkSourcePort?.internalValue;
    }
    if (this._noteText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteText = this._noteText?.internalValue;
    }
    if (this._noteUpdatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedAt = this._noteUpdatedAt?.internalValue;
    }
    if (this._noteUpdatedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedBy = this._noteUpdatedBy?.internalValue;
    }
    if (this._processLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processLaunchedAt = this._processLaunchedAt?.internalValue;
    }
    if (this._processName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName?.internalValue;
    }
    if (this._processParentPid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processParentPid = this._processParentPid?.internalValue;
    }
    if (this._processPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processPath = this._processPath?.internalValue;
    }
    if (this._processPid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processPid = this._processPid?.internalValue;
    }
    if (this._processTerminatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processTerminatedAt = this._processTerminatedAt?.internalValue;
    }
    if (this._productArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productArn = this._productArn?.internalValue;
    }
    if (this._productFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productFields = this._productFields?.internalValue;
    }
    if (this._productName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName?.internalValue;
    }
    if (this._recommendationText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendationText = this._recommendationText?.internalValue;
    }
    if (this._recordState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordState = this._recordState?.internalValue;
    }
    if (this._relatedFindingsId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsId = this._relatedFindingsId?.internalValue;
    }
    if (this._relatedFindingsProductArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsProductArn = this._relatedFindingsProductArn?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIamInstanceProfileArn = this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue;
    }
    if (this._resourceAwsEc2InstanceImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceImageId = this._resourceAwsEc2InstanceImageId?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIpv4Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpv4Addresses = this._resourceAwsEc2InstanceIpv4Addresses?.internalValue;
    }
    if (this._resourceAwsEc2InstanceIpv6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpv6Addresses = this._resourceAwsEc2InstanceIpv6Addresses?.internalValue;
    }
    if (this._resourceAwsEc2InstanceKeyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceKeyName = this._resourceAwsEc2InstanceKeyName?.internalValue;
    }
    if (this._resourceAwsEc2InstanceLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceLaunchedAt = this._resourceAwsEc2InstanceLaunchedAt?.internalValue;
    }
    if (this._resourceAwsEc2InstanceSubnetId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceSubnetId = this._resourceAwsEc2InstanceSubnetId?.internalValue;
    }
    if (this._resourceAwsEc2InstanceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceType = this._resourceAwsEc2InstanceType?.internalValue;
    }
    if (this._resourceAwsEc2InstanceVpcId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceVpcId = this._resourceAwsEc2InstanceVpcId?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyCreatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyCreatedAt = this._resourceAwsIamAccessKeyCreatedAt?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyStatus = this._resourceAwsIamAccessKeyStatus?.internalValue;
    }
    if (this._resourceAwsIamAccessKeyUserName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyUserName = this._resourceAwsIamAccessKeyUserName?.internalValue;
    }
    if (this._resourceAwsS3BucketOwnerId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerId = this._resourceAwsS3BucketOwnerId?.internalValue;
    }
    if (this._resourceAwsS3BucketOwnerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerName = this._resourceAwsS3BucketOwnerName?.internalValue;
    }
    if (this._resourceContainerImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageId = this._resourceContainerImageId?.internalValue;
    }
    if (this._resourceContainerImageName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageName = this._resourceContainerImageName?.internalValue;
    }
    if (this._resourceContainerLaunchedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerLaunchedAt = this._resourceContainerLaunchedAt?.internalValue;
    }
    if (this._resourceContainerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceContainerName = this._resourceContainerName?.internalValue;
    }
    if (this._resourceDetailsOther?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceDetailsOther = this._resourceDetailsOther?.internalValue;
    }
    if (this._resourceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId?.internalValue;
    }
    if (this._resourcePartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePartition = this._resourcePartition?.internalValue;
    }
    if (this._resourceRegion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRegion = this._resourceRegion?.internalValue;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    if (this._resourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType?.internalValue;
    }
    if (this._severityLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityLabel = this._severityLabel?.internalValue;
    }
    if (this._sourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl?.internalValue;
    }
    if (this._threatIntelIndicatorCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorCategory = this._threatIntelIndicatorCategory?.internalValue;
    }
    if (this._threatIntelIndicatorLastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorLastObservedAt = this._threatIntelIndicatorLastObservedAt?.internalValue;
    }
    if (this._threatIntelIndicatorSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSource = this._threatIntelIndicatorSource?.internalValue;
    }
    if (this._threatIntelIndicatorSourceUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSourceUrl = this._threatIntelIndicatorSourceUrl?.internalValue;
    }
    if (this._threatIntelIndicatorType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorType = this._threatIntelIndicatorType?.internalValue;
    }
    if (this._threatIntelIndicatorValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorValue = this._threatIntelIndicatorValue?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._updatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt?.internalValue;
    }
    if (this._userDefinedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedValues = this._userDefinedValues?.internalValue;
    }
    if (this._verificationState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationState = this._verificationState?.internalValue;
    }
    if (this._workflowStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowStatus = this._workflowStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccountId.internalValue = undefined;
      this._awsAccountName.internalValue = undefined;
      this._companyName.internalValue = undefined;
      this._complianceAssociatedStandardsId.internalValue = undefined;
      this._complianceSecurityControlId.internalValue = undefined;
      this._complianceSecurityControlParametersName.internalValue = undefined;
      this._complianceSecurityControlParametersValue.internalValue = undefined;
      this._complianceStatus.internalValue = undefined;
      this._confidence.internalValue = undefined;
      this._createdAt.internalValue = undefined;
      this._criticality.internalValue = undefined;
      this._description.internalValue = undefined;
      this._findingProviderFieldsConfidence.internalValue = undefined;
      this._findingProviderFieldsCriticality.internalValue = undefined;
      this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
      this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
      this._findingProviderFieldsSeverityLabel.internalValue = undefined;
      this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
      this._findingProviderFieldsTypes.internalValue = undefined;
      this._firstObservedAt.internalValue = undefined;
      this._generatorId.internalValue = undefined;
      this._id.internalValue = undefined;
      this._keyword.internalValue = undefined;
      this._lastObservedAt.internalValue = undefined;
      this._malwareName.internalValue = undefined;
      this._malwarePath.internalValue = undefined;
      this._malwareState.internalValue = undefined;
      this._malwareType.internalValue = undefined;
      this._networkDestinationDomain.internalValue = undefined;
      this._networkDestinationIpv4.internalValue = undefined;
      this._networkDestinationIpv6.internalValue = undefined;
      this._networkDestinationPort.internalValue = undefined;
      this._networkDirection.internalValue = undefined;
      this._networkProtocol.internalValue = undefined;
      this._networkSourceDomain.internalValue = undefined;
      this._networkSourceIpv4.internalValue = undefined;
      this._networkSourceIpv6.internalValue = undefined;
      this._networkSourceMac.internalValue = undefined;
      this._networkSourcePort.internalValue = undefined;
      this._noteText.internalValue = undefined;
      this._noteUpdatedAt.internalValue = undefined;
      this._noteUpdatedBy.internalValue = undefined;
      this._processLaunchedAt.internalValue = undefined;
      this._processName.internalValue = undefined;
      this._processParentPid.internalValue = undefined;
      this._processPath.internalValue = undefined;
      this._processPid.internalValue = undefined;
      this._processTerminatedAt.internalValue = undefined;
      this._productArn.internalValue = undefined;
      this._productFields.internalValue = undefined;
      this._productName.internalValue = undefined;
      this._recommendationText.internalValue = undefined;
      this._recordState.internalValue = undefined;
      this._relatedFindingsId.internalValue = undefined;
      this._relatedFindingsProductArn.internalValue = undefined;
      this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
      this._resourceAwsEc2InstanceImageId.internalValue = undefined;
      this._resourceAwsEc2InstanceIpv4Addresses.internalValue = undefined;
      this._resourceAwsEc2InstanceIpv6Addresses.internalValue = undefined;
      this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
      this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
      this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
      this._resourceAwsEc2InstanceType.internalValue = undefined;
      this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
      this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
      this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
      this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
      this._resourceAwsS3BucketOwnerId.internalValue = undefined;
      this._resourceAwsS3BucketOwnerName.internalValue = undefined;
      this._resourceContainerImageId.internalValue = undefined;
      this._resourceContainerImageName.internalValue = undefined;
      this._resourceContainerLaunchedAt.internalValue = undefined;
      this._resourceContainerName.internalValue = undefined;
      this._resourceDetailsOther.internalValue = undefined;
      this._resourceId.internalValue = undefined;
      this._resourcePartition.internalValue = undefined;
      this._resourceRegion.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._resourceType.internalValue = undefined;
      this._severityLabel.internalValue = undefined;
      this._sourceUrl.internalValue = undefined;
      this._threatIntelIndicatorCategory.internalValue = undefined;
      this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
      this._threatIntelIndicatorSource.internalValue = undefined;
      this._threatIntelIndicatorSourceUrl.internalValue = undefined;
      this._threatIntelIndicatorType.internalValue = undefined;
      this._threatIntelIndicatorValue.internalValue = undefined;
      this._title.internalValue = undefined;
      this._type.internalValue = undefined;
      this._updatedAt.internalValue = undefined;
      this._userDefinedValues.internalValue = undefined;
      this._verificationState.internalValue = undefined;
      this._workflowStatus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccountId.internalValue = value.awsAccountId;
      this._awsAccountName.internalValue = value.awsAccountName;
      this._companyName.internalValue = value.companyName;
      this._complianceAssociatedStandardsId.internalValue = value.complianceAssociatedStandardsId;
      this._complianceSecurityControlId.internalValue = value.complianceSecurityControlId;
      this._complianceSecurityControlParametersName.internalValue = value.complianceSecurityControlParametersName;
      this._complianceSecurityControlParametersValue.internalValue = value.complianceSecurityControlParametersValue;
      this._complianceStatus.internalValue = value.complianceStatus;
      this._confidence.internalValue = value.confidence;
      this._createdAt.internalValue = value.createdAt;
      this._criticality.internalValue = value.criticality;
      this._description.internalValue = value.description;
      this._findingProviderFieldsConfidence.internalValue = value.findingProviderFieldsConfidence;
      this._findingProviderFieldsCriticality.internalValue = value.findingProviderFieldsCriticality;
      this._findingProviderFieldsRelatedFindingsId.internalValue = value.findingProviderFieldsRelatedFindingsId;
      this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value.findingProviderFieldsRelatedFindingsProductArn;
      this._findingProviderFieldsSeverityLabel.internalValue = value.findingProviderFieldsSeverityLabel;
      this._findingProviderFieldsSeverityOriginal.internalValue = value.findingProviderFieldsSeverityOriginal;
      this._findingProviderFieldsTypes.internalValue = value.findingProviderFieldsTypes;
      this._firstObservedAt.internalValue = value.firstObservedAt;
      this._generatorId.internalValue = value.generatorId;
      this._id.internalValue = value.id;
      this._keyword.internalValue = value.keyword;
      this._lastObservedAt.internalValue = value.lastObservedAt;
      this._malwareName.internalValue = value.malwareName;
      this._malwarePath.internalValue = value.malwarePath;
      this._malwareState.internalValue = value.malwareState;
      this._malwareType.internalValue = value.malwareType;
      this._networkDestinationDomain.internalValue = value.networkDestinationDomain;
      this._networkDestinationIpv4.internalValue = value.networkDestinationIpv4;
      this._networkDestinationIpv6.internalValue = value.networkDestinationIpv6;
      this._networkDestinationPort.internalValue = value.networkDestinationPort;
      this._networkDirection.internalValue = value.networkDirection;
      this._networkProtocol.internalValue = value.networkProtocol;
      this._networkSourceDomain.internalValue = value.networkSourceDomain;
      this._networkSourceIpv4.internalValue = value.networkSourceIpv4;
      this._networkSourceIpv6.internalValue = value.networkSourceIpv6;
      this._networkSourceMac.internalValue = value.networkSourceMac;
      this._networkSourcePort.internalValue = value.networkSourcePort;
      this._noteText.internalValue = value.noteText;
      this._noteUpdatedAt.internalValue = value.noteUpdatedAt;
      this._noteUpdatedBy.internalValue = value.noteUpdatedBy;
      this._processLaunchedAt.internalValue = value.processLaunchedAt;
      this._processName.internalValue = value.processName;
      this._processParentPid.internalValue = value.processParentPid;
      this._processPath.internalValue = value.processPath;
      this._processPid.internalValue = value.processPid;
      this._processTerminatedAt.internalValue = value.processTerminatedAt;
      this._productArn.internalValue = value.productArn;
      this._productFields.internalValue = value.productFields;
      this._productName.internalValue = value.productName;
      this._recommendationText.internalValue = value.recommendationText;
      this._recordState.internalValue = value.recordState;
      this._relatedFindingsId.internalValue = value.relatedFindingsId;
      this._relatedFindingsProductArn.internalValue = value.relatedFindingsProductArn;
      this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value.resourceAwsEc2InstanceIamInstanceProfileArn;
      this._resourceAwsEc2InstanceImageId.internalValue = value.resourceAwsEc2InstanceImageId;
      this._resourceAwsEc2InstanceIpv4Addresses.internalValue = value.resourceAwsEc2InstanceIpv4Addresses;
      this._resourceAwsEc2InstanceIpv6Addresses.internalValue = value.resourceAwsEc2InstanceIpv6Addresses;
      this._resourceAwsEc2InstanceKeyName.internalValue = value.resourceAwsEc2InstanceKeyName;
      this._resourceAwsEc2InstanceLaunchedAt.internalValue = value.resourceAwsEc2InstanceLaunchedAt;
      this._resourceAwsEc2InstanceSubnetId.internalValue = value.resourceAwsEc2InstanceSubnetId;
      this._resourceAwsEc2InstanceType.internalValue = value.resourceAwsEc2InstanceType;
      this._resourceAwsEc2InstanceVpcId.internalValue = value.resourceAwsEc2InstanceVpcId;
      this._resourceAwsIamAccessKeyCreatedAt.internalValue = value.resourceAwsIamAccessKeyCreatedAt;
      this._resourceAwsIamAccessKeyStatus.internalValue = value.resourceAwsIamAccessKeyStatus;
      this._resourceAwsIamAccessKeyUserName.internalValue = value.resourceAwsIamAccessKeyUserName;
      this._resourceAwsS3BucketOwnerId.internalValue = value.resourceAwsS3BucketOwnerId;
      this._resourceAwsS3BucketOwnerName.internalValue = value.resourceAwsS3BucketOwnerName;
      this._resourceContainerImageId.internalValue = value.resourceContainerImageId;
      this._resourceContainerImageName.internalValue = value.resourceContainerImageName;
      this._resourceContainerLaunchedAt.internalValue = value.resourceContainerLaunchedAt;
      this._resourceContainerName.internalValue = value.resourceContainerName;
      this._resourceDetailsOther.internalValue = value.resourceDetailsOther;
      this._resourceId.internalValue = value.resourceId;
      this._resourcePartition.internalValue = value.resourcePartition;
      this._resourceRegion.internalValue = value.resourceRegion;
      this._resourceTags.internalValue = value.resourceTags;
      this._resourceType.internalValue = value.resourceType;
      this._severityLabel.internalValue = value.severityLabel;
      this._sourceUrl.internalValue = value.sourceUrl;
      this._threatIntelIndicatorCategory.internalValue = value.threatIntelIndicatorCategory;
      this._threatIntelIndicatorLastObservedAt.internalValue = value.threatIntelIndicatorLastObservedAt;
      this._threatIntelIndicatorSource.internalValue = value.threatIntelIndicatorSource;
      this._threatIntelIndicatorSourceUrl.internalValue = value.threatIntelIndicatorSourceUrl;
      this._threatIntelIndicatorType.internalValue = value.threatIntelIndicatorType;
      this._threatIntelIndicatorValue.internalValue = value.threatIntelIndicatorValue;
      this._title.internalValue = value.title;
      this._type.internalValue = value.type;
      this._updatedAt.internalValue = value.updatedAt;
      this._userDefinedValues.internalValue = value.userDefinedValues;
      this._verificationState.internalValue = value.verificationState;
      this._workflowStatus.internalValue = value.workflowStatus;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId = new SecurityhubInsightFiltersAwsAccountIdList(this, "aws_account_id", true);
  public get awsAccountId() {
    return this._awsAccountId;
  }
  public putAwsAccountId(value: SecurityhubInsightFiltersAwsAccountId[] | cdktn.IResolvable) {
    this._awsAccountId.internalValue = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId.internalValue;
  }

  // aws_account_name - computed: false, optional: true, required: false
  private _awsAccountName = new SecurityhubInsightFiltersAwsAccountNameList(this, "aws_account_name", true);
  public get awsAccountName() {
    return this._awsAccountName;
  }
  public putAwsAccountName(value: SecurityhubInsightFiltersAwsAccountName[] | cdktn.IResolvable) {
    this._awsAccountName.internalValue = value;
  }
  public resetAwsAccountName() {
    this._awsAccountName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountNameInput() {
    return this._awsAccountName.internalValue;
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName = new SecurityhubInsightFiltersCompanyNameList(this, "company_name", true);
  public get companyName() {
    return this._companyName;
  }
  public putCompanyName(value: SecurityhubInsightFiltersCompanyName[] | cdktn.IResolvable) {
    this._companyName.internalValue = value;
  }
  public resetCompanyName() {
    this._companyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName.internalValue;
  }

  // compliance_associated_standards_id - computed: false, optional: true, required: false
  private _complianceAssociatedStandardsId = new SecurityhubInsightFiltersComplianceAssociatedStandardsIdList(this, "compliance_associated_standards_id", true);
  public get complianceAssociatedStandardsId() {
    return this._complianceAssociatedStandardsId;
  }
  public putComplianceAssociatedStandardsId(value: SecurityhubInsightFiltersComplianceAssociatedStandardsId[] | cdktn.IResolvable) {
    this._complianceAssociatedStandardsId.internalValue = value;
  }
  public resetComplianceAssociatedStandardsId() {
    this._complianceAssociatedStandardsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceAssociatedStandardsIdInput() {
    return this._complianceAssociatedStandardsId.internalValue;
  }

  // compliance_security_control_id - computed: false, optional: true, required: false
  private _complianceSecurityControlId = new SecurityhubInsightFiltersComplianceSecurityControlIdList(this, "compliance_security_control_id", true);
  public get complianceSecurityControlId() {
    return this._complianceSecurityControlId;
  }
  public putComplianceSecurityControlId(value: SecurityhubInsightFiltersComplianceSecurityControlId[] | cdktn.IResolvable) {
    this._complianceSecurityControlId.internalValue = value;
  }
  public resetComplianceSecurityControlId() {
    this._complianceSecurityControlId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlIdInput() {
    return this._complianceSecurityControlId.internalValue;
  }

  // compliance_security_control_parameters_name - computed: false, optional: true, required: false
  private _complianceSecurityControlParametersName = new SecurityhubInsightFiltersComplianceSecurityControlParametersNameList(this, "compliance_security_control_parameters_name", true);
  public get complianceSecurityControlParametersName() {
    return this._complianceSecurityControlParametersName;
  }
  public putComplianceSecurityControlParametersName(value: SecurityhubInsightFiltersComplianceSecurityControlParametersName[] | cdktn.IResolvable) {
    this._complianceSecurityControlParametersName.internalValue = value;
  }
  public resetComplianceSecurityControlParametersName() {
    this._complianceSecurityControlParametersName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlParametersNameInput() {
    return this._complianceSecurityControlParametersName.internalValue;
  }

  // compliance_security_control_parameters_value - computed: false, optional: true, required: false
  private _complianceSecurityControlParametersValue = new SecurityhubInsightFiltersComplianceSecurityControlParametersValueList(this, "compliance_security_control_parameters_value", true);
  public get complianceSecurityControlParametersValue() {
    return this._complianceSecurityControlParametersValue;
  }
  public putComplianceSecurityControlParametersValue(value: SecurityhubInsightFiltersComplianceSecurityControlParametersValue[] | cdktn.IResolvable) {
    this._complianceSecurityControlParametersValue.internalValue = value;
  }
  public resetComplianceSecurityControlParametersValue() {
    this._complianceSecurityControlParametersValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSecurityControlParametersValueInput() {
    return this._complianceSecurityControlParametersValue.internalValue;
  }

  // compliance_status - computed: false, optional: true, required: false
  private _complianceStatus = new SecurityhubInsightFiltersComplianceStatusList(this, "compliance_status", true);
  public get complianceStatus() {
    return this._complianceStatus;
  }
  public putComplianceStatus(value: SecurityhubInsightFiltersComplianceStatus[] | cdktn.IResolvable) {
    this._complianceStatus.internalValue = value;
  }
  public resetComplianceStatus() {
    this._complianceStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStatusInput() {
    return this._complianceStatus.internalValue;
  }

  // confidence - computed: false, optional: true, required: false
  private _confidence = new SecurityhubInsightFiltersConfidenceList(this, "confidence", true);
  public get confidence() {
    return this._confidence;
  }
  public putConfidence(value: SecurityhubInsightFiltersConfidence[] | cdktn.IResolvable) {
    this._confidence.internalValue = value;
  }
  public resetConfidence() {
    this._confidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence.internalValue;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt = new SecurityhubInsightFiltersCreatedAtList(this, "created_at", true);
  public get createdAt() {
    return this._createdAt;
  }
  public putCreatedAt(value: SecurityhubInsightFiltersCreatedAt[] | cdktn.IResolvable) {
    this._createdAt.internalValue = value;
  }
  public resetCreatedAt() {
    this._createdAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt.internalValue;
  }

  // criticality - computed: false, optional: true, required: false
  private _criticality = new SecurityhubInsightFiltersCriticalityList(this, "criticality", true);
  public get criticality() {
    return this._criticality;
  }
  public putCriticality(value: SecurityhubInsightFiltersCriticality[] | cdktn.IResolvable) {
    this._criticality.internalValue = value;
  }
  public resetCriticality() {
    this._criticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description = new SecurityhubInsightFiltersDescriptionList(this, "description", true);
  public get description() {
    return this._description;
  }
  public putDescription(value: SecurityhubInsightFiltersDescription[] | cdktn.IResolvable) {
    this._description.internalValue = value;
  }
  public resetDescription() {
    this._description.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // finding_provider_fields_confidence - computed: false, optional: true, required: false
  private _findingProviderFieldsConfidence = new SecurityhubInsightFiltersFindingProviderFieldsConfidenceList(this, "finding_provider_fields_confidence", true);
  public get findingProviderFieldsConfidence() {
    return this._findingProviderFieldsConfidence;
  }
  public putFindingProviderFieldsConfidence(value: SecurityhubInsightFiltersFindingProviderFieldsConfidence[] | cdktn.IResolvable) {
    this._findingProviderFieldsConfidence.internalValue = value;
  }
  public resetFindingProviderFieldsConfidence() {
    this._findingProviderFieldsConfidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsConfidenceInput() {
    return this._findingProviderFieldsConfidence.internalValue;
  }

  // finding_provider_fields_criticality - computed: false, optional: true, required: false
  private _findingProviderFieldsCriticality = new SecurityhubInsightFiltersFindingProviderFieldsCriticalityList(this, "finding_provider_fields_criticality", true);
  public get findingProviderFieldsCriticality() {
    return this._findingProviderFieldsCriticality;
  }
  public putFindingProviderFieldsCriticality(value: SecurityhubInsightFiltersFindingProviderFieldsCriticality[] | cdktn.IResolvable) {
    this._findingProviderFieldsCriticality.internalValue = value;
  }
  public resetFindingProviderFieldsCriticality() {
    this._findingProviderFieldsCriticality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsCriticalityInput() {
    return this._findingProviderFieldsCriticality.internalValue;
  }

  // finding_provider_fields_related_findings_id - computed: false, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsId = new SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdList(this, "finding_provider_fields_related_findings_id", true);
  public get findingProviderFieldsRelatedFindingsId() {
    return this._findingProviderFieldsRelatedFindingsId;
  }
  public putFindingProviderFieldsRelatedFindingsId(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[] | cdktn.IResolvable) {
    this._findingProviderFieldsRelatedFindingsId.internalValue = value;
  }
  public resetFindingProviderFieldsRelatedFindingsId() {
    this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsIdInput() {
    return this._findingProviderFieldsRelatedFindingsId.internalValue;
  }

  // finding_provider_fields_related_findings_product_arn - computed: false, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsProductArn = new SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnList(this, "finding_provider_fields_related_findings_product_arn", true);
  public get findingProviderFieldsRelatedFindingsProductArn() {
    return this._findingProviderFieldsRelatedFindingsProductArn;
  }
  public putFindingProviderFieldsRelatedFindingsProductArn(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[] | cdktn.IResolvable) {
    this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value;
  }
  public resetFindingProviderFieldsRelatedFindingsProductArn() {
    this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsProductArnInput() {
    return this._findingProviderFieldsRelatedFindingsProductArn.internalValue;
  }

  // finding_provider_fields_severity_label - computed: false, optional: true, required: false
  private _findingProviderFieldsSeverityLabel = new SecurityhubInsightFiltersFindingProviderFieldsSeverityLabelList(this, "finding_provider_fields_severity_label", true);
  public get findingProviderFieldsSeverityLabel() {
    return this._findingProviderFieldsSeverityLabel;
  }
  public putFindingProviderFieldsSeverityLabel(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[] | cdktn.IResolvable) {
    this._findingProviderFieldsSeverityLabel.internalValue = value;
  }
  public resetFindingProviderFieldsSeverityLabel() {
    this._findingProviderFieldsSeverityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityLabelInput() {
    return this._findingProviderFieldsSeverityLabel.internalValue;
  }

  // finding_provider_fields_severity_original - computed: false, optional: true, required: false
  private _findingProviderFieldsSeverityOriginal = new SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginalList(this, "finding_provider_fields_severity_original", true);
  public get findingProviderFieldsSeverityOriginal() {
    return this._findingProviderFieldsSeverityOriginal;
  }
  public putFindingProviderFieldsSeverityOriginal(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[] | cdktn.IResolvable) {
    this._findingProviderFieldsSeverityOriginal.internalValue = value;
  }
  public resetFindingProviderFieldsSeverityOriginal() {
    this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityOriginalInput() {
    return this._findingProviderFieldsSeverityOriginal.internalValue;
  }

  // finding_provider_fields_types - computed: false, optional: true, required: false
  private _findingProviderFieldsTypes = new SecurityhubInsightFiltersFindingProviderFieldsTypesList(this, "finding_provider_fields_types", true);
  public get findingProviderFieldsTypes() {
    return this._findingProviderFieldsTypes;
  }
  public putFindingProviderFieldsTypes(value: SecurityhubInsightFiltersFindingProviderFieldsTypes[] | cdktn.IResolvable) {
    this._findingProviderFieldsTypes.internalValue = value;
  }
  public resetFindingProviderFieldsTypes() {
    this._findingProviderFieldsTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsTypesInput() {
    return this._findingProviderFieldsTypes.internalValue;
  }

  // first_observed_at - computed: false, optional: true, required: false
  private _firstObservedAt = new SecurityhubInsightFiltersFirstObservedAtList(this, "first_observed_at", true);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }
  public putFirstObservedAt(value: SecurityhubInsightFiltersFirstObservedAt[] | cdktn.IResolvable) {
    this._firstObservedAt.internalValue = value;
  }
  public resetFirstObservedAt() {
    this._firstObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstObservedAtInput() {
    return this._firstObservedAt.internalValue;
  }

  // generator_id - computed: false, optional: true, required: false
  private _generatorId = new SecurityhubInsightFiltersGeneratorIdList(this, "generator_id", true);
  public get generatorId() {
    return this._generatorId;
  }
  public putGeneratorId(value: SecurityhubInsightFiltersGeneratorId[] | cdktn.IResolvable) {
    this._generatorId.internalValue = value;
  }
  public resetGeneratorId() {
    this._generatorId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorIdInput() {
    return this._generatorId.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id = new SecurityhubInsightFiltersIdList(this, "id", true);
  public get id() {
    return this._id;
  }
  public putId(value: SecurityhubInsightFiltersId[] | cdktn.IResolvable) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword = new SecurityhubInsightFiltersKeywordList(this, "keyword", true);
  public get keyword() {
    return this._keyword;
  }
  public putKeyword(value: SecurityhubInsightFiltersKeyword[] | cdktn.IResolvable) {
    this._keyword.internalValue = value;
  }
  public resetKeyword() {
    this._keyword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword.internalValue;
  }

  // last_observed_at - computed: false, optional: true, required: false
  private _lastObservedAt = new SecurityhubInsightFiltersLastObservedAtList(this, "last_observed_at", true);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }
  public putLastObservedAt(value: SecurityhubInsightFiltersLastObservedAt[] | cdktn.IResolvable) {
    this._lastObservedAt.internalValue = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt.internalValue;
  }

  // malware_name - computed: false, optional: true, required: false
  private _malwareName = new SecurityhubInsightFiltersMalwareNameList(this, "malware_name", true);
  public get malwareName() {
    return this._malwareName;
  }
  public putMalwareName(value: SecurityhubInsightFiltersMalwareName[] | cdktn.IResolvable) {
    this._malwareName.internalValue = value;
  }
  public resetMalwareName() {
    this._malwareName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareNameInput() {
    return this._malwareName.internalValue;
  }

  // malware_path - computed: false, optional: true, required: false
  private _malwarePath = new SecurityhubInsightFiltersMalwarePathList(this, "malware_path", true);
  public get malwarePath() {
    return this._malwarePath;
  }
  public putMalwarePath(value: SecurityhubInsightFiltersMalwarePath[] | cdktn.IResolvable) {
    this._malwarePath.internalValue = value;
  }
  public resetMalwarePath() {
    this._malwarePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwarePathInput() {
    return this._malwarePath.internalValue;
  }

  // malware_state - computed: false, optional: true, required: false
  private _malwareState = new SecurityhubInsightFiltersMalwareStateList(this, "malware_state", true);
  public get malwareState() {
    return this._malwareState;
  }
  public putMalwareState(value: SecurityhubInsightFiltersMalwareState[] | cdktn.IResolvable) {
    this._malwareState.internalValue = value;
  }
  public resetMalwareState() {
    this._malwareState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStateInput() {
    return this._malwareState.internalValue;
  }

  // malware_type - computed: false, optional: true, required: false
  private _malwareType = new SecurityhubInsightFiltersMalwareTypeList(this, "malware_type", true);
  public get malwareType() {
    return this._malwareType;
  }
  public putMalwareType(value: SecurityhubInsightFiltersMalwareType[] | cdktn.IResolvable) {
    this._malwareType.internalValue = value;
  }
  public resetMalwareType() {
    this._malwareType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareTypeInput() {
    return this._malwareType.internalValue;
  }

  // network_destination_domain - computed: false, optional: true, required: false
  private _networkDestinationDomain = new SecurityhubInsightFiltersNetworkDestinationDomainList(this, "network_destination_domain", true);
  public get networkDestinationDomain() {
    return this._networkDestinationDomain;
  }
  public putNetworkDestinationDomain(value: SecurityhubInsightFiltersNetworkDestinationDomain[] | cdktn.IResolvable) {
    this._networkDestinationDomain.internalValue = value;
  }
  public resetNetworkDestinationDomain() {
    this._networkDestinationDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationDomainInput() {
    return this._networkDestinationDomain.internalValue;
  }

  // network_destination_ipv4 - computed: false, optional: true, required: false
  private _networkDestinationIpv4 = new SecurityhubInsightFiltersNetworkDestinationIpv4List(this, "network_destination_ipv4", true);
  public get networkDestinationIpv4() {
    return this._networkDestinationIpv4;
  }
  public putNetworkDestinationIpv4(value: SecurityhubInsightFiltersNetworkDestinationIpv4[] | cdktn.IResolvable) {
    this._networkDestinationIpv4.internalValue = value;
  }
  public resetNetworkDestinationIpv4() {
    this._networkDestinationIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpv4Input() {
    return this._networkDestinationIpv4.internalValue;
  }

  // network_destination_ipv6 - computed: false, optional: true, required: false
  private _networkDestinationIpv6 = new SecurityhubInsightFiltersNetworkDestinationIpv6List(this, "network_destination_ipv6", true);
  public get networkDestinationIpv6() {
    return this._networkDestinationIpv6;
  }
  public putNetworkDestinationIpv6(value: SecurityhubInsightFiltersNetworkDestinationIpv6[] | cdktn.IResolvable) {
    this._networkDestinationIpv6.internalValue = value;
  }
  public resetNetworkDestinationIpv6() {
    this._networkDestinationIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpv6Input() {
    return this._networkDestinationIpv6.internalValue;
  }

  // network_destination_port - computed: false, optional: true, required: false
  private _networkDestinationPort = new SecurityhubInsightFiltersNetworkDestinationPortList(this, "network_destination_port", true);
  public get networkDestinationPort() {
    return this._networkDestinationPort;
  }
  public putNetworkDestinationPort(value: SecurityhubInsightFiltersNetworkDestinationPort[] | cdktn.IResolvable) {
    this._networkDestinationPort.internalValue = value;
  }
  public resetNetworkDestinationPort() {
    this._networkDestinationPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationPortInput() {
    return this._networkDestinationPort.internalValue;
  }

  // network_direction - computed: false, optional: true, required: false
  private _networkDirection = new SecurityhubInsightFiltersNetworkDirectionList(this, "network_direction", true);
  public get networkDirection() {
    return this._networkDirection;
  }
  public putNetworkDirection(value: SecurityhubInsightFiltersNetworkDirection[] | cdktn.IResolvable) {
    this._networkDirection.internalValue = value;
  }
  public resetNetworkDirection() {
    this._networkDirection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDirectionInput() {
    return this._networkDirection.internalValue;
  }

  // network_protocol - computed: false, optional: true, required: false
  private _networkProtocol = new SecurityhubInsightFiltersNetworkProtocolList(this, "network_protocol", true);
  public get networkProtocol() {
    return this._networkProtocol;
  }
  public putNetworkProtocol(value: SecurityhubInsightFiltersNetworkProtocol[] | cdktn.IResolvable) {
    this._networkProtocol.internalValue = value;
  }
  public resetNetworkProtocol() {
    this._networkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol.internalValue;
  }

  // network_source_domain - computed: false, optional: true, required: false
  private _networkSourceDomain = new SecurityhubInsightFiltersNetworkSourceDomainList(this, "network_source_domain", true);
  public get networkSourceDomain() {
    return this._networkSourceDomain;
  }
  public putNetworkSourceDomain(value: SecurityhubInsightFiltersNetworkSourceDomain[] | cdktn.IResolvable) {
    this._networkSourceDomain.internalValue = value;
  }
  public resetNetworkSourceDomain() {
    this._networkSourceDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceDomainInput() {
    return this._networkSourceDomain.internalValue;
  }

  // network_source_ipv4 - computed: false, optional: true, required: false
  private _networkSourceIpv4 = new SecurityhubInsightFiltersNetworkSourceIpv4List(this, "network_source_ipv4", true);
  public get networkSourceIpv4() {
    return this._networkSourceIpv4;
  }
  public putNetworkSourceIpv4(value: SecurityhubInsightFiltersNetworkSourceIpv4[] | cdktn.IResolvable) {
    this._networkSourceIpv4.internalValue = value;
  }
  public resetNetworkSourceIpv4() {
    this._networkSourceIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpv4Input() {
    return this._networkSourceIpv4.internalValue;
  }

  // network_source_ipv6 - computed: false, optional: true, required: false
  private _networkSourceIpv6 = new SecurityhubInsightFiltersNetworkSourceIpv6List(this, "network_source_ipv6", true);
  public get networkSourceIpv6() {
    return this._networkSourceIpv6;
  }
  public putNetworkSourceIpv6(value: SecurityhubInsightFiltersNetworkSourceIpv6[] | cdktn.IResolvable) {
    this._networkSourceIpv6.internalValue = value;
  }
  public resetNetworkSourceIpv6() {
    this._networkSourceIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpv6Input() {
    return this._networkSourceIpv6.internalValue;
  }

  // network_source_mac - computed: false, optional: true, required: false
  private _networkSourceMac = new SecurityhubInsightFiltersNetworkSourceMacList(this, "network_source_mac", true);
  public get networkSourceMac() {
    return this._networkSourceMac;
  }
  public putNetworkSourceMac(value: SecurityhubInsightFiltersNetworkSourceMac[] | cdktn.IResolvable) {
    this._networkSourceMac.internalValue = value;
  }
  public resetNetworkSourceMac() {
    this._networkSourceMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceMacInput() {
    return this._networkSourceMac.internalValue;
  }

  // network_source_port - computed: false, optional: true, required: false
  private _networkSourcePort = new SecurityhubInsightFiltersNetworkSourcePortList(this, "network_source_port", true);
  public get networkSourcePort() {
    return this._networkSourcePort;
  }
  public putNetworkSourcePort(value: SecurityhubInsightFiltersNetworkSourcePort[] | cdktn.IResolvable) {
    this._networkSourcePort.internalValue = value;
  }
  public resetNetworkSourcePort() {
    this._networkSourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourcePortInput() {
    return this._networkSourcePort.internalValue;
  }

  // note_text - computed: false, optional: true, required: false
  private _noteText = new SecurityhubInsightFiltersNoteTextList(this, "note_text", true);
  public get noteText() {
    return this._noteText;
  }
  public putNoteText(value: SecurityhubInsightFiltersNoteText[] | cdktn.IResolvable) {
    this._noteText.internalValue = value;
  }
  public resetNoteText() {
    this._noteText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteTextInput() {
    return this._noteText.internalValue;
  }

  // note_updated_at - computed: false, optional: true, required: false
  private _noteUpdatedAt = new SecurityhubInsightFiltersNoteUpdatedAtList(this, "note_updated_at", true);
  public get noteUpdatedAt() {
    return this._noteUpdatedAt;
  }
  public putNoteUpdatedAt(value: SecurityhubInsightFiltersNoteUpdatedAt[] | cdktn.IResolvable) {
    this._noteUpdatedAt.internalValue = value;
  }
  public resetNoteUpdatedAt() {
    this._noteUpdatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedAtInput() {
    return this._noteUpdatedAt.internalValue;
  }

  // note_updated_by - computed: false, optional: true, required: false
  private _noteUpdatedBy = new SecurityhubInsightFiltersNoteUpdatedByList(this, "note_updated_by", true);
  public get noteUpdatedBy() {
    return this._noteUpdatedBy;
  }
  public putNoteUpdatedBy(value: SecurityhubInsightFiltersNoteUpdatedBy[] | cdktn.IResolvable) {
    this._noteUpdatedBy.internalValue = value;
  }
  public resetNoteUpdatedBy() {
    this._noteUpdatedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedByInput() {
    return this._noteUpdatedBy.internalValue;
  }

  // process_launched_at - computed: false, optional: true, required: false
  private _processLaunchedAt = new SecurityhubInsightFiltersProcessLaunchedAtList(this, "process_launched_at", true);
  public get processLaunchedAt() {
    return this._processLaunchedAt;
  }
  public putProcessLaunchedAt(value: SecurityhubInsightFiltersProcessLaunchedAt[] | cdktn.IResolvable) {
    this._processLaunchedAt.internalValue = value;
  }
  public resetProcessLaunchedAt() {
    this._processLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processLaunchedAtInput() {
    return this._processLaunchedAt.internalValue;
  }

  // process_name - computed: false, optional: true, required: false
  private _processName = new SecurityhubInsightFiltersProcessNameList(this, "process_name", true);
  public get processName() {
    return this._processName;
  }
  public putProcessName(value: SecurityhubInsightFiltersProcessName[] | cdktn.IResolvable) {
    this._processName.internalValue = value;
  }
  public resetProcessName() {
    this._processName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName.internalValue;
  }

  // process_parent_pid - computed: false, optional: true, required: false
  private _processParentPid = new SecurityhubInsightFiltersProcessParentPidList(this, "process_parent_pid", true);
  public get processParentPid() {
    return this._processParentPid;
  }
  public putProcessParentPid(value: SecurityhubInsightFiltersProcessParentPid[] | cdktn.IResolvable) {
    this._processParentPid.internalValue = value;
  }
  public resetProcessParentPid() {
    this._processParentPid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processParentPidInput() {
    return this._processParentPid.internalValue;
  }

  // process_path - computed: false, optional: true, required: false
  private _processPath = new SecurityhubInsightFiltersProcessPathList(this, "process_path", true);
  public get processPath() {
    return this._processPath;
  }
  public putProcessPath(value: SecurityhubInsightFiltersProcessPath[] | cdktn.IResolvable) {
    this._processPath.internalValue = value;
  }
  public resetProcessPath() {
    this._processPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPathInput() {
    return this._processPath.internalValue;
  }

  // process_pid - computed: false, optional: true, required: false
  private _processPid = new SecurityhubInsightFiltersProcessPidList(this, "process_pid", true);
  public get processPid() {
    return this._processPid;
  }
  public putProcessPid(value: SecurityhubInsightFiltersProcessPid[] | cdktn.IResolvable) {
    this._processPid.internalValue = value;
  }
  public resetProcessPid() {
    this._processPid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPidInput() {
    return this._processPid.internalValue;
  }

  // process_terminated_at - computed: false, optional: true, required: false
  private _processTerminatedAt = new SecurityhubInsightFiltersProcessTerminatedAtList(this, "process_terminated_at", true);
  public get processTerminatedAt() {
    return this._processTerminatedAt;
  }
  public putProcessTerminatedAt(value: SecurityhubInsightFiltersProcessTerminatedAt[] | cdktn.IResolvable) {
    this._processTerminatedAt.internalValue = value;
  }
  public resetProcessTerminatedAt() {
    this._processTerminatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processTerminatedAtInput() {
    return this._processTerminatedAt.internalValue;
  }

  // product_arn - computed: false, optional: true, required: false
  private _productArn = new SecurityhubInsightFiltersProductArnList(this, "product_arn", true);
  public get productArn() {
    return this._productArn;
  }
  public putProductArn(value: SecurityhubInsightFiltersProductArn[] | cdktn.IResolvable) {
    this._productArn.internalValue = value;
  }
  public resetProductArn() {
    this._productArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn.internalValue;
  }

  // product_fields - computed: false, optional: true, required: false
  private _productFields = new SecurityhubInsightFiltersProductFieldsList(this, "product_fields", true);
  public get productFields() {
    return this._productFields;
  }
  public putProductFields(value: SecurityhubInsightFiltersProductFields[] | cdktn.IResolvable) {
    this._productFields.internalValue = value;
  }
  public resetProductFields() {
    this._productFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFieldsInput() {
    return this._productFields.internalValue;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName = new SecurityhubInsightFiltersProductNameList(this, "product_name", true);
  public get productName() {
    return this._productName;
  }
  public putProductName(value: SecurityhubInsightFiltersProductName[] | cdktn.IResolvable) {
    this._productName.internalValue = value;
  }
  public resetProductName() {
    this._productName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName.internalValue;
  }

  // recommendation_text - computed: false, optional: true, required: false
  private _recommendationText = new SecurityhubInsightFiltersRecommendationTextList(this, "recommendation_text", true);
  public get recommendationText() {
    return this._recommendationText;
  }
  public putRecommendationText(value: SecurityhubInsightFiltersRecommendationText[] | cdktn.IResolvable) {
    this._recommendationText.internalValue = value;
  }
  public resetRecommendationText() {
    this._recommendationText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationTextInput() {
    return this._recommendationText.internalValue;
  }

  // record_state - computed: false, optional: true, required: false
  private _recordState = new SecurityhubInsightFiltersRecordStateList(this, "record_state", true);
  public get recordState() {
    return this._recordState;
  }
  public putRecordState(value: SecurityhubInsightFiltersRecordState[] | cdktn.IResolvable) {
    this._recordState.internalValue = value;
  }
  public resetRecordState() {
    this._recordState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordStateInput() {
    return this._recordState.internalValue;
  }

  // related_findings_id - computed: false, optional: true, required: false
  private _relatedFindingsId = new SecurityhubInsightFiltersRelatedFindingsIdList(this, "related_findings_id", true);
  public get relatedFindingsId() {
    return this._relatedFindingsId;
  }
  public putRelatedFindingsId(value: SecurityhubInsightFiltersRelatedFindingsId[] | cdktn.IResolvable) {
    this._relatedFindingsId.internalValue = value;
  }
  public resetRelatedFindingsId() {
    this._relatedFindingsId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsIdInput() {
    return this._relatedFindingsId.internalValue;
  }

  // related_findings_product_arn - computed: false, optional: true, required: false
  private _relatedFindingsProductArn = new SecurityhubInsightFiltersRelatedFindingsProductArnList(this, "related_findings_product_arn", true);
  public get relatedFindingsProductArn() {
    return this._relatedFindingsProductArn;
  }
  public putRelatedFindingsProductArn(value: SecurityhubInsightFiltersRelatedFindingsProductArn[] | cdktn.IResolvable) {
    this._relatedFindingsProductArn.internalValue = value;
  }
  public resetRelatedFindingsProductArn() {
    this._relatedFindingsProductArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsProductArnInput() {
    return this._relatedFindingsProductArn.internalValue;
  }

  // resource_aws_ec2_instance_iam_instance_profile_arn - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIamInstanceProfileArn = new SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnList(this, "resource_aws_ec2_instance_iam_instance_profile_arn", true);
  public get resourceAwsEc2InstanceIamInstanceProfileArn() {
    return this._resourceAwsEc2InstanceIamInstanceProfileArn;
  }
  public putResourceAwsEc2InstanceIamInstanceProfileArn(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIamInstanceProfileArn() {
    this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIamInstanceProfileArnInput() {
    return this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue;
  }

  // resource_aws_ec2_instance_image_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceImageId = new SecurityhubInsightFiltersResourceAwsEc2InstanceImageIdList(this, "resource_aws_ec2_instance_image_id", true);
  public get resourceAwsEc2InstanceImageId() {
    return this._resourceAwsEc2InstanceImageId;
  }
  public putResourceAwsEc2InstanceImageId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceImageId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceImageId() {
    this._resourceAwsEc2InstanceImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceImageIdInput() {
    return this._resourceAwsEc2InstanceImageId.internalValue;
  }

  // resource_aws_ec2_instance_ipv4_addresses - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIpv4Addresses = new SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesList(this, "resource_aws_ec2_instance_ipv4_addresses", true);
  public get resourceAwsEc2InstanceIpv4Addresses() {
    return this._resourceAwsEc2InstanceIpv4Addresses;
  }
  public putResourceAwsEc2InstanceIpv4Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIpv4Addresses.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIpv4Addresses() {
    this._resourceAwsEc2InstanceIpv4Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpv4AddressesInput() {
    return this._resourceAwsEc2InstanceIpv4Addresses.internalValue;
  }

  // resource_aws_ec2_instance_ipv6_addresses - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIpv6Addresses = new SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesList(this, "resource_aws_ec2_instance_ipv6_addresses", true);
  public get resourceAwsEc2InstanceIpv6Addresses() {
    return this._resourceAwsEc2InstanceIpv6Addresses;
  }
  public putResourceAwsEc2InstanceIpv6Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceIpv6Addresses.internalValue = value;
  }
  public resetResourceAwsEc2InstanceIpv6Addresses() {
    this._resourceAwsEc2InstanceIpv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpv6AddressesInput() {
    return this._resourceAwsEc2InstanceIpv6Addresses.internalValue;
  }

  // resource_aws_ec2_instance_key_name - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceKeyName = new SecurityhubInsightFiltersResourceAwsEc2InstanceKeyNameList(this, "resource_aws_ec2_instance_key_name", true);
  public get resourceAwsEc2InstanceKeyName() {
    return this._resourceAwsEc2InstanceKeyName;
  }
  public putResourceAwsEc2InstanceKeyName(value: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceKeyName.internalValue = value;
  }
  public resetResourceAwsEc2InstanceKeyName() {
    this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceKeyNameInput() {
    return this._resourceAwsEc2InstanceKeyName.internalValue;
  }

  // resource_aws_ec2_instance_launched_at - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceLaunchedAt = new SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtList(this, "resource_aws_ec2_instance_launched_at", true);
  public get resourceAwsEc2InstanceLaunchedAt() {
    return this._resourceAwsEc2InstanceLaunchedAt;
  }
  public putResourceAwsEc2InstanceLaunchedAt(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceLaunchedAt.internalValue = value;
  }
  public resetResourceAwsEc2InstanceLaunchedAt() {
    this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceLaunchedAtInput() {
    return this._resourceAwsEc2InstanceLaunchedAt.internalValue;
  }

  // resource_aws_ec2_instance_subnet_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceSubnetId = new SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetIdList(this, "resource_aws_ec2_instance_subnet_id", true);
  public get resourceAwsEc2InstanceSubnetId() {
    return this._resourceAwsEc2InstanceSubnetId;
  }
  public putResourceAwsEc2InstanceSubnetId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceSubnetId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceSubnetId() {
    this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceSubnetIdInput() {
    return this._resourceAwsEc2InstanceSubnetId.internalValue;
  }

  // resource_aws_ec2_instance_type - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceType = new SecurityhubInsightFiltersResourceAwsEc2InstanceTypeList(this, "resource_aws_ec2_instance_type", true);
  public get resourceAwsEc2InstanceType() {
    return this._resourceAwsEc2InstanceType;
  }
  public putResourceAwsEc2InstanceType(value: SecurityhubInsightFiltersResourceAwsEc2InstanceType[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceType.internalValue = value;
  }
  public resetResourceAwsEc2InstanceType() {
    this._resourceAwsEc2InstanceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceTypeInput() {
    return this._resourceAwsEc2InstanceType.internalValue;
  }

  // resource_aws_ec2_instance_vpc_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceVpcId = new SecurityhubInsightFiltersResourceAwsEc2InstanceVpcIdList(this, "resource_aws_ec2_instance_vpc_id", true);
  public get resourceAwsEc2InstanceVpcId() {
    return this._resourceAwsEc2InstanceVpcId;
  }
  public putResourceAwsEc2InstanceVpcId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[] | cdktn.IResolvable) {
    this._resourceAwsEc2InstanceVpcId.internalValue = value;
  }
  public resetResourceAwsEc2InstanceVpcId() {
    this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceVpcIdInput() {
    return this._resourceAwsEc2InstanceVpcId.internalValue;
  }

  // resource_aws_iam_access_key_created_at - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyCreatedAt = new SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtList(this, "resource_aws_iam_access_key_created_at", true);
  public get resourceAwsIamAccessKeyCreatedAt() {
    return this._resourceAwsIamAccessKeyCreatedAt;
  }
  public putResourceAwsIamAccessKeyCreatedAt(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyCreatedAt.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyCreatedAt() {
    this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyCreatedAtInput() {
    return this._resourceAwsIamAccessKeyCreatedAt.internalValue;
  }

  // resource_aws_iam_access_key_status - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyStatus = new SecurityhubInsightFiltersResourceAwsIamAccessKeyStatusList(this, "resource_aws_iam_access_key_status", true);
  public get resourceAwsIamAccessKeyStatus() {
    return this._resourceAwsIamAccessKeyStatus;
  }
  public putResourceAwsIamAccessKeyStatus(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyStatus.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyStatus() {
    this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyStatusInput() {
    return this._resourceAwsIamAccessKeyStatus.internalValue;
  }

  // resource_aws_iam_access_key_user_name - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyUserName = new SecurityhubInsightFiltersResourceAwsIamAccessKeyUserNameList(this, "resource_aws_iam_access_key_user_name", true);
  public get resourceAwsIamAccessKeyUserName() {
    return this._resourceAwsIamAccessKeyUserName;
  }
  public putResourceAwsIamAccessKeyUserName(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[] | cdktn.IResolvable) {
    this._resourceAwsIamAccessKeyUserName.internalValue = value;
  }
  public resetResourceAwsIamAccessKeyUserName() {
    this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyUserNameInput() {
    return this._resourceAwsIamAccessKeyUserName.internalValue;
  }

  // resource_aws_s3_bucket_owner_id - computed: false, optional: true, required: false
  private _resourceAwsS3BucketOwnerId = new SecurityhubInsightFiltersResourceAwsS3BucketOwnerIdList(this, "resource_aws_s3_bucket_owner_id", true);
  public get resourceAwsS3BucketOwnerId() {
    return this._resourceAwsS3BucketOwnerId;
  }
  public putResourceAwsS3BucketOwnerId(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[] | cdktn.IResolvable) {
    this._resourceAwsS3BucketOwnerId.internalValue = value;
  }
  public resetResourceAwsS3BucketOwnerId() {
    this._resourceAwsS3BucketOwnerId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerIdInput() {
    return this._resourceAwsS3BucketOwnerId.internalValue;
  }

  // resource_aws_s3_bucket_owner_name - computed: false, optional: true, required: false
  private _resourceAwsS3BucketOwnerName = new SecurityhubInsightFiltersResourceAwsS3BucketOwnerNameList(this, "resource_aws_s3_bucket_owner_name", true);
  public get resourceAwsS3BucketOwnerName() {
    return this._resourceAwsS3BucketOwnerName;
  }
  public putResourceAwsS3BucketOwnerName(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[] | cdktn.IResolvable) {
    this._resourceAwsS3BucketOwnerName.internalValue = value;
  }
  public resetResourceAwsS3BucketOwnerName() {
    this._resourceAwsS3BucketOwnerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerNameInput() {
    return this._resourceAwsS3BucketOwnerName.internalValue;
  }

  // resource_container_image_id - computed: false, optional: true, required: false
  private _resourceContainerImageId = new SecurityhubInsightFiltersResourceContainerImageIdList(this, "resource_container_image_id", true);
  public get resourceContainerImageId() {
    return this._resourceContainerImageId;
  }
  public putResourceContainerImageId(value: SecurityhubInsightFiltersResourceContainerImageId[] | cdktn.IResolvable) {
    this._resourceContainerImageId.internalValue = value;
  }
  public resetResourceContainerImageId() {
    this._resourceContainerImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageIdInput() {
    return this._resourceContainerImageId.internalValue;
  }

  // resource_container_image_name - computed: false, optional: true, required: false
  private _resourceContainerImageName = new SecurityhubInsightFiltersResourceContainerImageNameList(this, "resource_container_image_name", true);
  public get resourceContainerImageName() {
    return this._resourceContainerImageName;
  }
  public putResourceContainerImageName(value: SecurityhubInsightFiltersResourceContainerImageName[] | cdktn.IResolvable) {
    this._resourceContainerImageName.internalValue = value;
  }
  public resetResourceContainerImageName() {
    this._resourceContainerImageName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageNameInput() {
    return this._resourceContainerImageName.internalValue;
  }

  // resource_container_launched_at - computed: false, optional: true, required: false
  private _resourceContainerLaunchedAt = new SecurityhubInsightFiltersResourceContainerLaunchedAtList(this, "resource_container_launched_at", true);
  public get resourceContainerLaunchedAt() {
    return this._resourceContainerLaunchedAt;
  }
  public putResourceContainerLaunchedAt(value: SecurityhubInsightFiltersResourceContainerLaunchedAt[] | cdktn.IResolvable) {
    this._resourceContainerLaunchedAt.internalValue = value;
  }
  public resetResourceContainerLaunchedAt() {
    this._resourceContainerLaunchedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerLaunchedAtInput() {
    return this._resourceContainerLaunchedAt.internalValue;
  }

  // resource_container_name - computed: false, optional: true, required: false
  private _resourceContainerName = new SecurityhubInsightFiltersResourceContainerNameList(this, "resource_container_name", true);
  public get resourceContainerName() {
    return this._resourceContainerName;
  }
  public putResourceContainerName(value: SecurityhubInsightFiltersResourceContainerName[] | cdktn.IResolvable) {
    this._resourceContainerName.internalValue = value;
  }
  public resetResourceContainerName() {
    this._resourceContainerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerNameInput() {
    return this._resourceContainerName.internalValue;
  }

  // resource_details_other - computed: false, optional: true, required: false
  private _resourceDetailsOther = new SecurityhubInsightFiltersResourceDetailsOtherList(this, "resource_details_other", true);
  public get resourceDetailsOther() {
    return this._resourceDetailsOther;
  }
  public putResourceDetailsOther(value: SecurityhubInsightFiltersResourceDetailsOther[] | cdktn.IResolvable) {
    this._resourceDetailsOther.internalValue = value;
  }
  public resetResourceDetailsOther() {
    this._resourceDetailsOther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDetailsOtherInput() {
    return this._resourceDetailsOther.internalValue;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId = new SecurityhubInsightFiltersResourceIdList(this, "resource_id", true);
  public get resourceId() {
    return this._resourceId;
  }
  public putResourceId(value: SecurityhubInsightFiltersResourceId[] | cdktn.IResolvable) {
    this._resourceId.internalValue = value;
  }
  public resetResourceId() {
    this._resourceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId.internalValue;
  }

  // resource_partition - computed: false, optional: true, required: false
  private _resourcePartition = new SecurityhubInsightFiltersResourcePartitionList(this, "resource_partition", true);
  public get resourcePartition() {
    return this._resourcePartition;
  }
  public putResourcePartition(value: SecurityhubInsightFiltersResourcePartition[] | cdktn.IResolvable) {
    this._resourcePartition.internalValue = value;
  }
  public resetResourcePartition() {
    this._resourcePartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePartitionInput() {
    return this._resourcePartition.internalValue;
  }

  // resource_region - computed: false, optional: true, required: false
  private _resourceRegion = new SecurityhubInsightFiltersResourceRegionList(this, "resource_region", true);
  public get resourceRegion() {
    return this._resourceRegion;
  }
  public putResourceRegion(value: SecurityhubInsightFiltersResourceRegion[] | cdktn.IResolvable) {
    this._resourceRegion.internalValue = value;
  }
  public resetResourceRegion() {
    this._resourceRegion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRegionInput() {
    return this._resourceRegion.internalValue;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new SecurityhubInsightFiltersResourceTagsList(this, "resource_tags", true);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: SecurityhubInsightFiltersResourceTags[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType = new SecurityhubInsightFiltersResourceTypeList(this, "resource_type", true);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: SecurityhubInsightFiltersResourceType[] | cdktn.IResolvable) {
    this._resourceType.internalValue = value;
  }
  public resetResourceType() {
    this._resourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType.internalValue;
  }

  // severity_label - computed: false, optional: true, required: false
  private _severityLabel = new SecurityhubInsightFiltersSeverityLabelList(this, "severity_label", true);
  public get severityLabel() {
    return this._severityLabel;
  }
  public putSeverityLabel(value: SecurityhubInsightFiltersSeverityLabel[] | cdktn.IResolvable) {
    this._severityLabel.internalValue = value;
  }
  public resetSeverityLabel() {
    this._severityLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLabelInput() {
    return this._severityLabel.internalValue;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl = new SecurityhubInsightFiltersSourceUrlList(this, "source_url", true);
  public get sourceUrl() {
    return this._sourceUrl;
  }
  public putSourceUrl(value: SecurityhubInsightFiltersSourceUrl[] | cdktn.IResolvable) {
    this._sourceUrl.internalValue = value;
  }
  public resetSourceUrl() {
    this._sourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl.internalValue;
  }

  // threat_intel_indicator_category - computed: false, optional: true, required: false
  private _threatIntelIndicatorCategory = new SecurityhubInsightFiltersThreatIntelIndicatorCategoryList(this, "threat_intel_indicator_category", true);
  public get threatIntelIndicatorCategory() {
    return this._threatIntelIndicatorCategory;
  }
  public putThreatIntelIndicatorCategory(value: SecurityhubInsightFiltersThreatIntelIndicatorCategory[] | cdktn.IResolvable) {
    this._threatIntelIndicatorCategory.internalValue = value;
  }
  public resetThreatIntelIndicatorCategory() {
    this._threatIntelIndicatorCategory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorCategoryInput() {
    return this._threatIntelIndicatorCategory.internalValue;
  }

  // threat_intel_indicator_last_observed_at - computed: false, optional: true, required: false
  private _threatIntelIndicatorLastObservedAt = new SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtList(this, "threat_intel_indicator_last_observed_at", true);
  public get threatIntelIndicatorLastObservedAt() {
    return this._threatIntelIndicatorLastObservedAt;
  }
  public putThreatIntelIndicatorLastObservedAt(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[] | cdktn.IResolvable) {
    this._threatIntelIndicatorLastObservedAt.internalValue = value;
  }
  public resetThreatIntelIndicatorLastObservedAt() {
    this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorLastObservedAtInput() {
    return this._threatIntelIndicatorLastObservedAt.internalValue;
  }

  // threat_intel_indicator_source - computed: false, optional: true, required: false
  private _threatIntelIndicatorSource = new SecurityhubInsightFiltersThreatIntelIndicatorSourceList(this, "threat_intel_indicator_source", true);
  public get threatIntelIndicatorSource() {
    return this._threatIntelIndicatorSource;
  }
  public putThreatIntelIndicatorSource(value: SecurityhubInsightFiltersThreatIntelIndicatorSource[] | cdktn.IResolvable) {
    this._threatIntelIndicatorSource.internalValue = value;
  }
  public resetThreatIntelIndicatorSource() {
    this._threatIntelIndicatorSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceInput() {
    return this._threatIntelIndicatorSource.internalValue;
  }

  // threat_intel_indicator_source_url - computed: false, optional: true, required: false
  private _threatIntelIndicatorSourceUrl = new SecurityhubInsightFiltersThreatIntelIndicatorSourceUrlList(this, "threat_intel_indicator_source_url", true);
  public get threatIntelIndicatorSourceUrl() {
    return this._threatIntelIndicatorSourceUrl;
  }
  public putThreatIntelIndicatorSourceUrl(value: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[] | cdktn.IResolvable) {
    this._threatIntelIndicatorSourceUrl.internalValue = value;
  }
  public resetThreatIntelIndicatorSourceUrl() {
    this._threatIntelIndicatorSourceUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceUrlInput() {
    return this._threatIntelIndicatorSourceUrl.internalValue;
  }

  // threat_intel_indicator_type - computed: false, optional: true, required: false
  private _threatIntelIndicatorType = new SecurityhubInsightFiltersThreatIntelIndicatorTypeList(this, "threat_intel_indicator_type", true);
  public get threatIntelIndicatorType() {
    return this._threatIntelIndicatorType;
  }
  public putThreatIntelIndicatorType(value: SecurityhubInsightFiltersThreatIntelIndicatorType[] | cdktn.IResolvable) {
    this._threatIntelIndicatorType.internalValue = value;
  }
  public resetThreatIntelIndicatorType() {
    this._threatIntelIndicatorType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorTypeInput() {
    return this._threatIntelIndicatorType.internalValue;
  }

  // threat_intel_indicator_value - computed: false, optional: true, required: false
  private _threatIntelIndicatorValue = new SecurityhubInsightFiltersThreatIntelIndicatorValueList(this, "threat_intel_indicator_value", true);
  public get threatIntelIndicatorValue() {
    return this._threatIntelIndicatorValue;
  }
  public putThreatIntelIndicatorValue(value: SecurityhubInsightFiltersThreatIntelIndicatorValue[] | cdktn.IResolvable) {
    this._threatIntelIndicatorValue.internalValue = value;
  }
  public resetThreatIntelIndicatorValue() {
    this._threatIntelIndicatorValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorValueInput() {
    return this._threatIntelIndicatorValue.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title = new SecurityhubInsightFiltersTitleList(this, "title", true);
  public get title() {
    return this._title;
  }
  public putTitle(value: SecurityhubInsightFiltersTitle[] | cdktn.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type = new SecurityhubInsightFiltersTypeList(this, "type", true);
  public get type() {
    return this._type;
  }
  public putType(value: SecurityhubInsightFiltersType[] | cdktn.IResolvable) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt = new SecurityhubInsightFiltersUpdatedAtList(this, "updated_at", true);
  public get updatedAt() {
    return this._updatedAt;
  }
  public putUpdatedAt(value: SecurityhubInsightFiltersUpdatedAt[] | cdktn.IResolvable) {
    this._updatedAt.internalValue = value;
  }
  public resetUpdatedAt() {
    this._updatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt.internalValue;
  }

  // user_defined_values - computed: false, optional: true, required: false
  private _userDefinedValues = new SecurityhubInsightFiltersUserDefinedValuesList(this, "user_defined_values", true);
  public get userDefinedValues() {
    return this._userDefinedValues;
  }
  public putUserDefinedValues(value: SecurityhubInsightFiltersUserDefinedValues[] | cdktn.IResolvable) {
    this._userDefinedValues.internalValue = value;
  }
  public resetUserDefinedValues() {
    this._userDefinedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedValuesInput() {
    return this._userDefinedValues.internalValue;
  }

  // verification_state - computed: false, optional: true, required: false
  private _verificationState = new SecurityhubInsightFiltersVerificationStateList(this, "verification_state", true);
  public get verificationState() {
    return this._verificationState;
  }
  public putVerificationState(value: SecurityhubInsightFiltersVerificationState[] | cdktn.IResolvable) {
    this._verificationState.internalValue = value;
  }
  public resetVerificationState() {
    this._verificationState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStateInput() {
    return this._verificationState.internalValue;
  }

  // workflow_status - computed: false, optional: true, required: false
  private _workflowStatus = new SecurityhubInsightFiltersWorkflowStatusList(this, "workflow_status", true);
  public get workflowStatus() {
    return this._workflowStatus;
  }
  public putWorkflowStatus(value: SecurityhubInsightFiltersWorkflowStatus[] | cdktn.IResolvable) {
    this._workflowStatus.internalValue = value;
  }
  public resetWorkflowStatus() {
    this._workflowStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowStatusInput() {
    return this._workflowStatus.internalValue;
  }
}
