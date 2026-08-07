# `observabilityadminS3TableIntegration` Submodule <a name="`observabilityadminS3TableIntegration` Submodule" id="@cdktn/provider-aws.observabilityadminS3TableIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminS3TableIntegration <a name="ObservabilityadminS3TableIntegration" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration aws_observabilityadmin_s3_table_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_arn: str,
  encryption: IResolvable | typing.List[ObservabilityadminS3TableIntegrationEncryption] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ObservabilityadminS3TableIntegrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#role_arn ObservabilityadminS3TableIntegration#role_arn}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.encryption">encryption</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>]</code> | encryption block. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#tags ObservabilityadminS3TableIntegration#tags}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#role_arn ObservabilityadminS3TableIntegration#role_arn}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.encryption"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>]

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#encryption ObservabilityadminS3TableIntegration#encryption}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#region ObservabilityadminS3TableIntegration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#tags ObservabilityadminS3TableIntegration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#timeouts ObservabilityadminS3TableIntegration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption"></a>

```python
def put_encryption(
  value: IResolvable | typing.List[ObservabilityadminS3TableIntegrationEncryption]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putEncryption.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#create ObservabilityadminS3TableIntegration#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#delete ObservabilityadminS3TableIntegration#delete}

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObservabilityadminS3TableIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObservabilityadminS3TableIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminS3TableIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.destinationTableBucketArn">destination_table_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList">ObservabilityadminS3TableIntegrationEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference">ObservabilityadminS3TableIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_table_bucket_arn`<sup>Required</sup> <a name="destination_table_bucket_arn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.destinationTableBucketArn"></a>

```python
destination_table_bucket_arn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryption"></a>

```python
encryption: ObservabilityadminS3TableIntegrationEncryptionList
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList">ObservabilityadminS3TableIntegrationEncryptionList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.timeouts"></a>

```python
timeouts: ObservabilityadminS3TableIntegrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference">ObservabilityadminS3TableIntegrationTimeoutsOutputReference</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.encryptionInput"></a>

```python
encryption_input: IResolvable | typing.List[ObservabilityadminS3TableIntegrationEncryption]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ObservabilityadminS3TableIntegrationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminS3TableIntegrationConfig <a name="ObservabilityadminS3TableIntegrationConfig" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_arn: str,
  encryption: IResolvable | typing.List[ObservabilityadminS3TableIntegrationEncryption] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ObservabilityadminS3TableIntegrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#role_arn ObservabilityadminS3TableIntegration#role_arn}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.encryption">encryption</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>]</code> | encryption block. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#tags ObservabilityadminS3TableIntegration#tags}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#role_arn ObservabilityadminS3TableIntegration#role_arn}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.encryption"></a>

```python
encryption: IResolvable | typing.List[ObservabilityadminS3TableIntegrationEncryption]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>]

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#encryption ObservabilityadminS3TableIntegration#encryption}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#region ObservabilityadminS3TableIntegration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#tags ObservabilityadminS3TableIntegration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationConfig.property.timeouts"></a>

```python
timeouts: ObservabilityadminS3TableIntegrationTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#timeouts ObservabilityadminS3TableIntegration#timeouts}

---

### ObservabilityadminS3TableIntegrationEncryption <a name="ObservabilityadminS3TableIntegrationEncryption" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption(
  sse_algorithm: str,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#sse_algorithm ObservabilityadminS3TableIntegration#sse_algorithm}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#kms_key_arn ObservabilityadminS3TableIntegration#kms_key_arn}. |

---

##### `sse_algorithm`<sup>Required</sup> <a name="sse_algorithm" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#sse_algorithm ObservabilityadminS3TableIntegration#sse_algorithm}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#kms_key_arn ObservabilityadminS3TableIntegration#kms_key_arn}.

---

### ObservabilityadminS3TableIntegrationTimeouts <a name="ObservabilityadminS3TableIntegrationTimeouts" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#create ObservabilityadminS3TableIntegration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/observabilityadmin_s3_table_integration#delete ObservabilityadminS3TableIntegration#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminS3TableIntegrationEncryptionList <a name="ObservabilityadminS3TableIntegrationEncryptionList" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObservabilityadminS3TableIntegrationEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ObservabilityadminS3TableIntegrationEncryption]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>]

---


### ObservabilityadminS3TableIntegrationEncryptionOutputReference <a name="ObservabilityadminS3TableIntegrationEncryptionOutputReference" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithmInput">sse_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `sse_algorithm_input`<sup>Optional</sup> <a name="sse_algorithm_input" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithmInput"></a>

```python
sse_algorithm_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `sse_algorithm`<sup>Required</sup> <a name="sse_algorithm" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ObservabilityadminS3TableIntegrationEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationEncryption">ObservabilityadminS3TableIntegrationEncryption</a>

---


### ObservabilityadminS3TableIntegrationTimeoutsOutputReference <a name="ObservabilityadminS3TableIntegrationTimeoutsOutputReference" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import observabilityadmin_s3_table_integration

observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ObservabilityadminS3TableIntegrationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.observabilityadminS3TableIntegration.ObservabilityadminS3TableIntegrationTimeouts">ObservabilityadminS3TableIntegrationTimeouts</a>

---



