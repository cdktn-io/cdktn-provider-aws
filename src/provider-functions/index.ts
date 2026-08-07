/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from provider function schema

import * as cdktn from 'cdktn';

/**
* Provider-defined functions of the aws provider.
*/
export class AwsProviderFunctions {
  private readonly providerLocalName: string;

  /**
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  constructor(providerLocalName: string) {
    this.providerLocalName = providerLocalName;
  }

  /**
  * Builds an ARN from its constituent parts
  * @param {string} partition - Partition in which the resource is located
  * @param {string} service - Service namespace
  * @param {string} region - Region code
  * @param {string} accountId - AWS account identifier
  * @param {string} resource - Resource section, typically composed of a resource type and identifier
  * @returns {string}
  */
  public arnBuild(partition: string, service: string, region: string, accountId: string, resource: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "arn_build", [partition, service, region, accountId, resource]));
  }

  /**
  * Parses an ARN into its constituent parts
  * @param {string} arn - ARN (Amazon Resource Name) to parse
  * @returns {object}
  */
  public arnParse(arn: string): cdktn.IResolvable {
    return cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "arn_parse", [arn]);
  }

  /**
  * Trims the path prefix from an IAM role Amazon Resource Name (ARN). This function can be used when services require role ARNs to be passed without a path.
  * @param {string} arn - IAM role Amazon Resource Name (ARN)
  * @returns {string}
  */
  public trimIamRolePath(arn: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "trim_iam_role_path", [arn]));
  }

  /**
  * Formats a User-Agent product for use with the user_agent argument in the provider or provider_meta block.
  * @param {string} productName - Product name.
  * @param {string} productVersion - Product version.
  * @param {string} comment - Comment describing any additional product details.
  * @returns {string}
  */
  public userAgent(productName: string, productVersion: string, comment: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "user_agent", [productName, productVersion, comment]));
  }
}
