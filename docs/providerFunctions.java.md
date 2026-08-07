# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-aws.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AwsProviderFunctions <a name="AwsProviderFunctions" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions"></a>

Provider-defined functions of the aws provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer"></a>

```java
import io.cdktn.providers.aws.provider_functions.AwsProviderFunctions;

new AwsProviderFunctions(java.lang.String providerLocalName);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer.parameter.providerLocalName">providerLocalName</a></code> | <code>java.lang.String</code> | The local name of the provider in required_providers; |

---

##### `providerLocalName`<sup>Required</sup> <a name="providerLocalName" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* java.lang.String

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild">arnBuild</a></code> | Builds an ARN from its constituent parts. |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse">arnParse</a></code> | Parses an ARN into its constituent parts. |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath">trimIamRolePath</a></code> | Trims the path prefix from an IAM role Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent">userAgent</a></code> | Formats a User-Agent product for use with the user_agent argument in the provider or provider_meta block. |

---

##### `arnBuild` <a name="arnBuild" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild"></a>

```java
public java.lang.String arnBuild(java.lang.String partition, java.lang.String service, java.lang.String region, java.lang.String accountId, java.lang.String resource)
```

Builds an ARN from its constituent parts.

###### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.partition"></a>

- *Type:* java.lang.String

Partition in which the resource is located.

---

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.service"></a>

- *Type:* java.lang.String

Service namespace.

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.region"></a>

- *Type:* java.lang.String

Region code.

---

###### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.accountId"></a>

- *Type:* java.lang.String

AWS account identifier.

---

###### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.resource"></a>

- *Type:* java.lang.String

Resource section, typically composed of a resource type and identifier.

---

##### `arnParse` <a name="arnParse" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse"></a>

```java
public IResolvable arnParse(java.lang.String arn)
```

Parses an ARN into its constituent parts.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse.parameter.arn"></a>

- *Type:* java.lang.String

ARN (Amazon Resource Name) to parse.

---

##### `trimIamRolePath` <a name="trimIamRolePath" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath"></a>

```java
public java.lang.String trimIamRolePath(java.lang.String arn)
```

Trims the path prefix from an IAM role Amazon Resource Name (ARN).

This function can be used when services require role ARNs to be passed without a path.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath.parameter.arn"></a>

- *Type:* java.lang.String

IAM role Amazon Resource Name (ARN).

---

##### `userAgent` <a name="userAgent" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent"></a>

```java
public java.lang.String userAgent(java.lang.String productName, java.lang.String productVersion, java.lang.String comment)
```

Formats a User-Agent product for use with the user_agent argument in the provider or provider_meta block.

###### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.productName"></a>

- *Type:* java.lang.String

Product name.

---

###### `productVersion`<sup>Required</sup> <a name="productVersion" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.productVersion"></a>

- *Type:* java.lang.String

Product version.

---

###### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.comment"></a>

- *Type:* java.lang.String

Comment describing any additional product details.

---





