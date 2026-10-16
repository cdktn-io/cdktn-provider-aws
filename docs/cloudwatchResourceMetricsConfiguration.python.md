# `cloudwatchResourceMetricsConfiguration` Submodule <a name="`cloudwatchResourceMetricsConfiguration` Submodule" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchResourceMetricsConfiguration <a name="CloudwatchResourceMetricsConfiguration" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration aws_cloudwatch_resource_metrics_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_resource_metrics_configuration

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_arn: str,
  metric_selection: IResolvable | typing.List[CloudwatchResourceMetricsConfigurationMetricSelection] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.metricSelection">metric_selection</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>]</code> | metric_selection block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}.

---

##### `metric_selection`<sup>Optional</sup> <a name="metric_selection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.metricSelection"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>]

metric_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#metric_selection CloudwatchResourceMetricsConfiguration#metric_selection}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#region CloudwatchResourceMetricsConfiguration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelection">put_metric_selection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetMetricSelection">reset_metric_selection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metric_selection` <a name="put_metric_selection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelection"></a>

```python
def put_metric_selection(
  value: IResolvable | typing.List[CloudwatchResourceMetricsConfigurationMetricSelection]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.putMetricSelection.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>]

---

##### `reset_metric_selection` <a name="reset_metric_selection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetMetricSelection"></a>

```python
def reset_metric_selection() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct"></a>

```python
from cdktn_provider_aws import cloudwatch_resource_metrics_configuration

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_aws import cloudwatch_resource_metrics_configuration

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_aws import cloudwatch_resource_metrics_configuration

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_aws import cloudwatch_resource_metrics_configuration

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchResourceMetricsConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchResourceMetricsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchResourceMetricsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelection">metric_selection</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList">CloudwatchResourceMetricsConfigurationMetricSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelectionInput">metric_selection_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metric_selection`<sup>Required</sup> <a name="metric_selection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelection"></a>

```python
metric_selection: CloudwatchResourceMetricsConfigurationMetricSelectionList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList">CloudwatchResourceMetricsConfigurationMetricSelectionList</a>

---

##### `metric_selection_input`<sup>Optional</sup> <a name="metric_selection_input" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.metricSelectionInput"></a>

```python
metric_selection_input: IResolvable | typing.List[CloudwatchResourceMetricsConfigurationMetricSelection]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchResourceMetricsConfigurationConfig <a name="CloudwatchResourceMetricsConfigurationConfig" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_resource_metrics_configuration

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_arn: str,
  metric_selection: IResolvable | typing.List[CloudwatchResourceMetricsConfigurationMetricSelection] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.metricSelection">metric_selection</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>]</code> | metric_selection block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#resource_arn CloudwatchResourceMetricsConfiguration#resource_arn}.

---

##### `metric_selection`<sup>Optional</sup> <a name="metric_selection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.metricSelection"></a>

```python
metric_selection: IResolvable | typing.List[CloudwatchResourceMetricsConfigurationMetricSelection]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>]

metric_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#metric_selection CloudwatchResourceMetricsConfiguration#metric_selection}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#region CloudwatchResourceMetricsConfiguration#region}

---

### CloudwatchResourceMetricsConfigurationMetricSelection <a name="CloudwatchResourceMetricsConfigurationMetricSelection" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_resource_metrics_configuration

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection(
  include_metrics: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection.property.includeMetrics">include_metrics</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#include_metrics CloudwatchResourceMetricsConfiguration#include_metrics}. |

---

##### `include_metrics`<sup>Required</sup> <a name="include_metrics" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection.property.includeMetrics"></a>

```python
include_metrics: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/cloudwatch_resource_metrics_configuration#include_metrics CloudwatchResourceMetricsConfiguration#include_metrics}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchResourceMetricsConfigurationMetricSelectionList <a name="CloudwatchResourceMetricsConfigurationMetricSelectionList" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_resource_metrics_configuration

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchResourceMetricsConfigurationMetricSelection]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>]

---


### CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference <a name="CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import cloudwatch_resource_metrics_configuration

cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.includeMetricsInput">include_metrics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.includeMetrics">include_metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_metrics_input`<sup>Optional</sup> <a name="include_metrics_input" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.includeMetricsInput"></a>

```python
include_metrics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_metrics`<sup>Required</sup> <a name="include_metrics" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.includeMetrics"></a>

```python
include_metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchResourceMetricsConfigurationMetricSelection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchResourceMetricsConfiguration.CloudwatchResourceMetricsConfigurationMetricSelection">CloudwatchResourceMetricsConfigurationMetricSelection</a>

---



