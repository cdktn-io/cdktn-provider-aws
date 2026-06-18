# `cloudwatchLogS3TableIntegrationSource` Submodule <a name="`cloudwatchLogS3TableIntegrationSource` Submodule" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogS3TableIntegrationSource <a name="CloudwatchLogS3TableIntegrationSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source aws_cloudwatch_log_s3_table_integration_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  integration_arn: str,
  data_source: IResolvable | typing.List[CloudwatchLogS3TableIntegrationSourceDataSource] = None,
  region: str = None,
  timeouts: CloudwatchLogS3TableIntegrationSourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.integrationArn">integration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.dataSource">data_source</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>]</code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `integration_arn`<sup>Required</sup> <a name="integration_arn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.integrationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}.

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.dataSource"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>]

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#data_source CloudwatchLogS3TableIntegrationSource#data_source}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#region CloudwatchLogS3TableIntegrationSource#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#timeouts CloudwatchLogS3TableIntegrationSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource">put_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_source` <a name="put_data_source" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource"></a>

```python
def put_data_source(
  value: IResolvable | typing.List[CloudwatchLogS3TableIntegrationSourceDataSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#delete CloudwatchLogS3TableIntegrationSource#delete}

---

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchLogS3TableIntegrationSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchLogS3TableIntegrationSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchLogS3TableIntegrationSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchLogS3TableIntegrationSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogS3TableIntegrationSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSource">data_source</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList">CloudwatchLogS3TableIntegrationSourceDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference">CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSourceInput">data_source_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArnInput">integration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArn">integration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSource"></a>

```python
data_source: CloudwatchLogS3TableIntegrationSourceDataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList">CloudwatchLogS3TableIntegrationSourceDataSourceList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeouts"></a>

```python
timeouts: CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference">CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference</a>

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSourceInput"></a>

```python
data_source_input: IResolvable | typing.List[CloudwatchLogS3TableIntegrationSourceDataSource]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>]

---

##### `integration_arn_input`<sup>Optional</sup> <a name="integration_arn_input" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArnInput"></a>

```python
integration_arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CloudwatchLogS3TableIntegrationSourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

---

##### `integration_arn`<sup>Required</sup> <a name="integration_arn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArn"></a>

```python
integration_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogS3TableIntegrationSourceConfig <a name="CloudwatchLogS3TableIntegrationSourceConfig" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  integration_arn: str,
  data_source: IResolvable | typing.List[CloudwatchLogS3TableIntegrationSourceDataSource] = None,
  region: str = None,
  timeouts: CloudwatchLogS3TableIntegrationSourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.integrationArn">integration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dataSource">data_source</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>]</code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `integration_arn`<sup>Required</sup> <a name="integration_arn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.integrationArn"></a>

```python
integration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}.

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dataSource"></a>

```python
data_source: IResolvable | typing.List[CloudwatchLogS3TableIntegrationSourceDataSource]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>]

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#data_source CloudwatchLogS3TableIntegrationSource#data_source}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#region CloudwatchLogS3TableIntegrationSource#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.timeouts"></a>

```python
timeouts: CloudwatchLogS3TableIntegrationSourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#timeouts CloudwatchLogS3TableIntegrationSource#timeouts}

---

### CloudwatchLogS3TableIntegrationSourceDataSource <a name="CloudwatchLogS3TableIntegrationSourceDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#name CloudwatchLogS3TableIntegrationSource#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#type CloudwatchLogS3TableIntegrationSource#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#name CloudwatchLogS3TableIntegrationSource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#type CloudwatchLogS3TableIntegrationSource#type}.

---

### CloudwatchLogS3TableIntegrationSourceTimeouts <a name="CloudwatchLogS3TableIntegrationSourceTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#delete CloudwatchLogS3TableIntegrationSource#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogS3TableIntegrationSourceDataSourceList <a name="CloudwatchLogS3TableIntegrationSourceDataSourceList" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchLogS3TableIntegrationSourceDataSource]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>]

---


### CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference <a name="CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchLogS3TableIntegrationSourceDataSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>

---


### CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference <a name="CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_log_s3_table_integration_source

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchLogS3TableIntegrationSourceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

---



