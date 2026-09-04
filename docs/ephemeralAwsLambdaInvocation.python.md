# `ephemeralAwsLambdaInvocation` Submodule <a name="`ephemeralAwsLambdaInvocation` Submodule" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsLambdaInvocation <a name="EphemeralAwsLambdaInvocation" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation aws_lambda_invocation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_lambda_invocation

ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  function_name: str,
  payload: str,
  client_context: str = None,
  log_type: str = None,
  qualifier: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#function_name EphemeralAwsLambdaInvocation#function_name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.payload">payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#payload EphemeralAwsLambdaInvocation#payload}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.clientContext">client_context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#client_context EphemeralAwsLambdaInvocation#client_context}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.logType">log_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#log_type EphemeralAwsLambdaInvocation#log_type}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#qualifier EphemeralAwsLambdaInvocation#qualifier}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#function_name EphemeralAwsLambdaInvocation#function_name}.

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.payload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#payload EphemeralAwsLambdaInvocation#payload}.

---

##### `client_context`<sup>Optional</sup> <a name="client_context" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.clientContext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#client_context EphemeralAwsLambdaInvocation#client_context}.

---

##### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.logType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#log_type EphemeralAwsLambdaInvocation#log_type}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.qualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#qualifier EphemeralAwsLambdaInvocation#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#region EphemeralAwsLambdaInvocation#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetClientContext">reset_client_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetLogType">reset_log_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetQualifier">reset_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_client_context` <a name="reset_client_context" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetClientContext"></a>

```python
def reset_client_context() -> None
```

##### `reset_log_type` <a name="reset_log_type" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetLogType"></a>

```python
def reset_log_type() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetQualifier"></a>

```python
def reset_qualifier() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct"></a>

```python
from cdktn_provider_aws import ephemeral_aws_lambda_invocation

ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement"></a>

```python
from cdktn_provider_aws import ephemeral_aws_lambda_invocation

ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_aws import ephemeral_aws_lambda_invocation

ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.executedVersion">executed_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionError">function_error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logResult">log_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContextInput">client_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContext">client_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `executed_version`<sup>Required</sup> <a name="executed_version" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.executedVersion"></a>

```python
executed_version: str
```

- *Type:* str

---

##### `function_error`<sup>Required</sup> <a name="function_error" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionError"></a>

```python
function_error: str
```

- *Type:* str

---

##### `log_result`<sup>Required</sup> <a name="log_result" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logResult"></a>

```python
log_result: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_context_input`<sup>Optional</sup> <a name="client_context_input" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContextInput"></a>

```python
client_context_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `client_context`<sup>Required</sup> <a name="client_context" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContext"></a>

```python
client_context: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsLambdaInvocationConfig <a name="EphemeralAwsLambdaInvocationConfig" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_lambda_invocation

ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  function_name: str,
  payload: str,
  client_context: str = None,
  log_type: str = None,
  qualifier: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#function_name EphemeralAwsLambdaInvocation#function_name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.payload">payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#payload EphemeralAwsLambdaInvocation#payload}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.clientContext">client_context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#client_context EphemeralAwsLambdaInvocation#client_context}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.logType">log_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#log_type EphemeralAwsLambdaInvocation#log_type}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#qualifier EphemeralAwsLambdaInvocation#qualifier}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#function_name EphemeralAwsLambdaInvocation#function_name}.

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.payload"></a>

```python
payload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#payload EphemeralAwsLambdaInvocation#payload}.

---

##### `client_context`<sup>Optional</sup> <a name="client_context" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.clientContext"></a>

```python
client_context: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#client_context EphemeralAwsLambdaInvocation#client_context}.

---

##### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#log_type EphemeralAwsLambdaInvocation#log_type}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#qualifier EphemeralAwsLambdaInvocation#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/ephemeral-resources/lambda_invocation#region EphemeralAwsLambdaInvocation#region}

---



