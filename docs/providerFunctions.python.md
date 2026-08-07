# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-aws.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### AwsProviderFunctions <a name="AwsProviderFunctions" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions"></a>

Provider-defined functions of the aws provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer"></a>

```python
from cdktn_provider_aws import provider_functions

providerFunctions.AwsProviderFunctions(
  provider_local_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer.parameter.providerLocalName">provider_local_name</a></code> | <code>str</code> | The local name of the provider in required_providers; |

---

##### `provider_local_name`<sup>Required</sup> <a name="provider_local_name" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* str

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild">arn_build</a></code> | Builds an ARN from its constituent parts. |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse">arn_parse</a></code> | Parses an ARN into its constituent parts. |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath">trim_iam_role_path</a></code> | Trims the path prefix from an IAM role Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent">user_agent</a></code> | Formats a User-Agent product for use with the user_agent argument in the provider or provider_meta block. |

---

##### `arn_build` <a name="arn_build" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild"></a>

```python
def arn_build(
  partition: str,
  service: str,
  region: str,
  account_id: str,
  resource: str
) -> str
```

Builds an ARN from its constituent parts.

###### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.partition"></a>

- *Type:* str

Partition in which the resource is located.

---

###### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.service"></a>

- *Type:* str

Service namespace.

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.region"></a>

- *Type:* str

Region code.

---

###### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.accountId"></a>

- *Type:* str

AWS account identifier.

---

###### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnBuild.parameter.resource"></a>

- *Type:* str

Resource section, typically composed of a resource type and identifier.

---

##### `arn_parse` <a name="arn_parse" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse"></a>

```python
def arn_parse(
  arn: str
) -> IResolvable
```

Parses an ARN into its constituent parts.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.arnParse.parameter.arn"></a>

- *Type:* str

ARN (Amazon Resource Name) to parse.

---

##### `trim_iam_role_path` <a name="trim_iam_role_path" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath"></a>

```python
def trim_iam_role_path(
  arn: str
) -> str
```

Trims the path prefix from an IAM role Amazon Resource Name (ARN).

This function can be used when services require role ARNs to be passed without a path.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.trimIamRolePath.parameter.arn"></a>

- *Type:* str

IAM role Amazon Resource Name (ARN).

---

##### `user_agent` <a name="user_agent" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent"></a>

```python
def user_agent(
  product_name: str,
  product_version: str,
  comment: str
) -> str
```

Formats a User-Agent product for use with the user_agent argument in the provider or provider_meta block.

###### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.productName"></a>

- *Type:* str

Product name.

---

###### `product_version`<sup>Required</sup> <a name="product_version" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.productVersion"></a>

- *Type:* str

Product version.

---

###### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.providerFunctions.AwsProviderFunctions.userAgent.parameter.comment"></a>

- *Type:* str

Comment describing any additional product details.

---





