# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-aws.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AwsProviderFunctions <a name="AwsProviderFunctions" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions"></a>

Provider-defined functions of the aws provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/providerfunctions"

providerfunctions.NewAwsProviderFunctions(providerLocalName *string) AwsProviderFunctions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer.parameter.providerLocalName">providerLocalName</a></code> | <code>*string</code> | The local name of the provider in required_providers; |

---

##### `providerLocalName`<sup>Required</sup> <a name="providerLocalName" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* *string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild">ArnBuild</a></code> | Builds an ARN from its constituent parts. |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse">ArnParse</a></code> | Parses an ARN into its constituent parts. |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath">TrimIamRolePath</a></code> | Trims the path prefix from an IAM role Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent">UserAgent</a></code> | Formats a User-Agent product for use with the user_agent argument in the provider or provider_meta block. |

---

##### `ArnBuild` <a name="ArnBuild" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild"></a>

```go
func ArnBuild(partition *string, service *string, region *string, accountId *string, resource *string) *string
```

Builds an ARN from its constituent parts.

###### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.partition"></a>

- *Type:* *string

Partition in which the resource is located.

---

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.service"></a>

- *Type:* *string

Service namespace.

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.region"></a>

- *Type:* *string

Region code.

---

###### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.accountId"></a>

- *Type:* *string

AWS account identifier.

---

###### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.resource"></a>

- *Type:* *string

Resource section, typically composed of a resource type and identifier.

---

##### `ArnParse` <a name="ArnParse" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse"></a>

```go
func ArnParse(arn *string) IResolvable
```

Parses an ARN into its constituent parts.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse.parameter.arn"></a>

- *Type:* *string

ARN (Amazon Resource Name) to parse.

---

##### `TrimIamRolePath` <a name="TrimIamRolePath" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath"></a>

```go
func TrimIamRolePath(arn *string) *string
```

Trims the path prefix from an IAM role Amazon Resource Name (ARN).

This function can be used when services require role ARNs to be passed without a path.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath.parameter.arn"></a>

- *Type:* *string

IAM role Amazon Resource Name (ARN).

---

##### `UserAgent` <a name="UserAgent" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent"></a>

```go
func UserAgent(productName *string, productVersion *string, comment *string) *string
```

Formats a User-Agent product for use with the user_agent argument in the provider or provider_meta block.

###### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.productName"></a>

- *Type:* *string

Product name.

---

###### `productVersion`<sup>Required</sup> <a name="productVersion" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.productVersion"></a>

- *Type:* *string

Product version.

---

###### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.comment"></a>

- *Type:* *string

Comment describing any additional product details.

---





