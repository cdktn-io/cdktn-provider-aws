# `ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity` Submodule <a name="`ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity` Submodule" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity <a name="EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity aws_cognito_identity_openid_token_for_developer_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_cognito_identity_openid_token_for_developer_identity

ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  identity_pool_id: str,
  logins: typing.Mapping[str],
  identity_id: str = None,
  principal_tags: typing.Mapping[str] = None,
  region: str = None,
  token_duration: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.logins">logins</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.principalTags">principal_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.tokenDuration">token_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.identityPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}.

---

##### `logins`<sup>Required</sup> <a name="logins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.logins"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.identityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}.

---

##### `principal_tags`<sup>Optional</sup> <a name="principal_tags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.principalTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#region EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#region}

---

##### `token_duration`<sup>Optional</sup> <a name="token_duration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.Initializer.parameter.tokenDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetIdentityId">reset_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetPrincipalTags">reset_principal_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetTokenDuration">reset_token_duration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_identity_id` <a name="reset_identity_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetIdentityId"></a>

```python
def reset_identity_id() -> None
```

##### `reset_principal_tags` <a name="reset_principal_tags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetPrincipalTags"></a>

```python
def reset_principal_tags() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_token_duration` <a name="reset_token_duration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.resetTokenDuration"></a>

```python
def reset_token_duration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct"></a>

```python
from cdktn_provider_aws import ephemeral_aws_cognito_identity_openid_token_for_developer_identity

ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement"></a>

```python
from cdktn_provider_aws import ephemeral_aws_cognito_identity_openid_token_for_developer_identity

ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_aws import ephemeral_aws_cognito_identity_openid_token_for_developer_identity

ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityIdInput">identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolIdInput">identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.loginsInput">logins_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTagsInput">principal_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDurationInput">token_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.logins">logins</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTags">principal_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDuration">token_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `identity_id_input`<sup>Optional</sup> <a name="identity_id_input" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityIdInput"></a>

```python
identity_id_input: str
```

- *Type:* str

---

##### `identity_pool_id_input`<sup>Optional</sup> <a name="identity_pool_id_input" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolIdInput"></a>

```python
identity_pool_id_input: str
```

- *Type:* str

---

##### `logins_input`<sup>Optional</sup> <a name="logins_input" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.loginsInput"></a>

```python
logins_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `principal_tags_input`<sup>Optional</sup> <a name="principal_tags_input" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTagsInput"></a>

```python
principal_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `token_duration_input`<sup>Optional</sup> <a name="token_duration_input" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDurationInput"></a>

```python
token_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `logins`<sup>Required</sup> <a name="logins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.logins"></a>

```python
logins: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `principal_tags`<sup>Required</sup> <a name="principal_tags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.principalTags"></a>

```python
principal_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `token_duration`<sup>Required</sup> <a name="token_duration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tokenDuration"></a>

```python
token_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig <a name="EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.Initializer"></a>

```python
from cdktn_provider_aws import ephemeral_aws_cognito_identity_openid_token_for_developer_identity

ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  identity_pool_id: str,
  logins: typing.Mapping[str],
  identity_id: str = None,
  principal_tags: typing.Mapping[str] = None,
  region: str = None,
  token_duration: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.logins">logins</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.principalTags">principal_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.tokenDuration">token_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_pool_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_pool_id}.

---

##### `logins`<sup>Required</sup> <a name="logins" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.logins"></a>

```python
logins: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#logins EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#logins}.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#identity_id EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#identity_id}.

---

##### `principal_tags`<sup>Optional</sup> <a name="principal_tags" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.principalTags"></a>

```python
principal_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#principal_tags EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#principal_tags}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#region EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#region}

---

##### `token_duration`<sup>Optional</sup> <a name="token_duration" id="@cdktn/provider-aws.ephemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity.EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentityConfig.property.tokenDuration"></a>

```python
token_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/cognito_identity_openid_token_for_developer_identity#token_duration EphemeralAwsCognitoIdentityOpenidTokenForDeveloperIdentity#token_duration}.

---



