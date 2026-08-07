# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-aws.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AwsProviderFunctions <a name="AwsProviderFunctions" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions"></a>

Provider-defined functions of the aws provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AwsProviderFunctions(string ProviderLocalName);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer.parameter.providerLocalName">ProviderLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `ProviderLocalName`<sup>Required</sup> <a name="ProviderLocalName" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

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

```csharp
private string ArnBuild(string Partition, string Service, string Region, string AccountId, string Resource)
```

Builds an ARN from its constituent parts.

###### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.partition"></a>

- *Type:* string

Partition in which the resource is located.

---

###### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.service"></a>

- *Type:* string

Service namespace.

---

###### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.region"></a>

- *Type:* string

Region code.

---

###### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.accountId"></a>

- *Type:* string

AWS account identifier.

---

###### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.resource"></a>

- *Type:* string

Resource section, typically composed of a resource type and identifier.

---

##### `ArnParse` <a name="ArnParse" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse"></a>

```csharp
private IResolvable ArnParse(string Arn)
```

Parses an ARN into its constituent parts.

###### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse.parameter.arn"></a>

- *Type:* string

ARN (Amazon Resource Name) to parse.

---

##### `TrimIamRolePath` <a name="TrimIamRolePath" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath"></a>

```csharp
private string TrimIamRolePath(string Arn)
```

Trims the path prefix from an IAM role Amazon Resource Name (ARN).

This function can be used when services require role ARNs to be passed without a path.

###### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath.parameter.arn"></a>

- *Type:* string

IAM role Amazon Resource Name (ARN).

---

##### `UserAgent` <a name="UserAgent" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent"></a>

```csharp
private string UserAgent(string ProductName, string ProductVersion, string Comment)
```

Formats a User-Agent product for use with the user_agent argument in the provider or provider_meta block.

###### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.productName"></a>

- *Type:* string

Product name.

---

###### `ProductVersion`<sup>Required</sup> <a name="ProductVersion" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.productVersion"></a>

- *Type:* string

Product version.

---

###### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.comment"></a>

- *Type:* string

Comment describing any additional product details.

---





