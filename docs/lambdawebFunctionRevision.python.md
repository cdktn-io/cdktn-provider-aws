# `lambdawebFunctionRevision` Submodule <a name="`lambdawebFunctionRevision` Submodule" id="@cdktn/provider-aws.lambdawebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdawebFunctionRevision <a name="LambdawebFunctionRevision" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision aws_lambdaweb_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevision(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  build_config: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfig] = None,
  description: str = None,
  kms_key_arn: str = None,
  region: str = None,
  service_config: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfig] = None,
  timeouts: LambdawebFunctionRevisionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.buildConfig">build_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>]</code> | build_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.serviceConfig">service_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>]</code> | service_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}.

---

##### `build_config`<sup>Optional</sup> <a name="build_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.buildConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>]

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#build_config LambdawebFunctionRevision#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#region LambdawebFunctionRevision#region}

---

##### `service_config`<sup>Optional</sup> <a name="service_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.serviceConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>]

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#service_config LambdawebFunctionRevision#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeouts LambdawebFunctionRevision#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putBuildConfig">put_build_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putServiceConfig">put_service_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetBuildConfig">reset_build_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetServiceConfig">reset_service_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_build_config` <a name="put_build_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putBuildConfig"></a>

```python
def put_build_config(
  value: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putBuildConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>]

---

##### `put_service_config` <a name="put_service_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putServiceConfig"></a>

```python
def put_service_config(
  value: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putServiceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#create LambdawebFunctionRevision#create}

---

##### `reset_build_config` <a name="reset_build_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetBuildConfig"></a>

```python
def reset_build_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_config` <a name="reset_service_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetServiceConfig"></a>

```python
def reset_service_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdawebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevision.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevision.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevision.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevision.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdawebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdawebFunctionRevision to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdawebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdawebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfig">build_config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList">LambdawebFunctionRevisionBuildConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfig">service_config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList">LambdawebFunctionRevisionServiceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference">LambdawebFunctionRevisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfigInput">build_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfigInput">service_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `build_config`<sup>Required</sup> <a name="build_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfig"></a>

```python
build_config: LambdawebFunctionRevisionBuildConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList">LambdawebFunctionRevisionBuildConfigList</a>

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

##### `service_config`<sup>Required</sup> <a name="service_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfig"></a>

```python
service_config: LambdawebFunctionRevisionServiceConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList">LambdawebFunctionRevisionServiceConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeouts"></a>

```python
timeouts: LambdawebFunctionRevisionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference">LambdawebFunctionRevisionTimeoutsOutputReference</a>

---

##### `build_config_input`<sup>Optional</sup> <a name="build_config_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.buildConfigInput"></a>

```python
build_config_input: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_config_input`<sup>Optional</sup> <a name="service_config_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.serviceConfigInput"></a>

```python
service_config_input: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | LambdawebFunctionRevisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevision.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdawebFunctionRevisionBuildConfig <a name="LambdawebFunctionRevisionBuildConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig(
  code_config: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfig] = None,
  runtime_config: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigRuntimeConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.codeConfig">code_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>]</code> | code_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.runtimeConfig">runtime_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>]</code> | runtime_config block. |

---

##### `code_config`<sup>Optional</sup> <a name="code_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.codeConfig"></a>

```python
code_config: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>]

code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#code_config LambdawebFunctionRevision#code_config}

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig.property.runtimeConfig"></a>

```python
runtime_config: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigRuntimeConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>]

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime_config LambdawebFunctionRevision#runtime_config}

---

### LambdawebFunctionRevisionBuildConfigCodeConfig <a name="LambdawebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig(
  s3_object: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfigS3Object] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig.property.s3Object">s3_object</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>]</code> | s3_object block. |

---

##### `s3_object`<sup>Optional</sup> <a name="s3_object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig.property.s3Object"></a>

```python
s3_object: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfigS3Object]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>]

s3_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#s3_object LambdawebFunctionRevision#s3_object}

---

### LambdawebFunctionRevisionBuildConfigCodeConfigS3Object <a name="LambdawebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object(
  bucket: str,
  key: str,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#bucket LambdawebFunctionRevision#bucket}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#key LambdawebFunctionRevision#key}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#version_id LambdawebFunctionRevision#version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#bucket LambdawebFunctionRevision#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#key LambdawebFunctionRevision#key}.

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#version_id LambdawebFunctionRevision#version_id}.

---

### LambdawebFunctionRevisionBuildConfigRuntimeConfig <a name="LambdawebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig(
  runtime: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime LambdawebFunctionRevision#runtime}. |

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#runtime LambdawebFunctionRevision#runtime}.

---

### LambdawebFunctionRevisionConfig <a name="LambdawebFunctionRevisionConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  build_config: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfig] = None,
  description: str = None,
  kms_key_arn: str = None,
  region: str = None,
  service_config: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfig] = None,
  timeouts: LambdawebFunctionRevisionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.buildConfig">build_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>]</code> | build_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.serviceConfig">service_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>]</code> | service_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#function_name LambdawebFunctionRevision#function_name}.

---

##### `build_config`<sup>Optional</sup> <a name="build_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.buildConfig"></a>

```python
build_config: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>]

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#build_config LambdawebFunctionRevision#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#description LambdawebFunctionRevision#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#kms_key_arn LambdawebFunctionRevision#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#region LambdawebFunctionRevision#region}

---

##### `service_config`<sup>Optional</sup> <a name="service_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.serviceConfig"></a>

```python
service_config: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>]

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#service_config LambdawebFunctionRevision#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionConfig.property.timeouts"></a>

```python
timeouts: LambdawebFunctionRevisionTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeouts LambdawebFunctionRevision#timeouts}

---

### LambdawebFunctionRevisionServiceConfig <a name="LambdawebFunctionRevisionServiceConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig(
  execution_role_arn: str,
  egress_network_connector_arn: str = None,
  environment_variables: typing.Mapping[str] = None,
  max_concurrency_per_environment: typing.Union[int, float] = None,
  telemetry_config: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfig] = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#execution_role_arn LambdawebFunctionRevision#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.egressNetworkConnectorArn">egress_network_connector_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#egress_network_connector_arn LambdawebFunctionRevision#egress_network_connector_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#environment_variables LambdawebFunctionRevision#environment_variables}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment">max_concurrency_per_environment</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#max_concurrency_per_environment LambdawebFunctionRevision#max_concurrency_per_environment}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.telemetryConfig">telemetry_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>]</code> | telemetry_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeout_seconds LambdawebFunctionRevision#timeout_seconds}. |

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#execution_role_arn LambdawebFunctionRevision#execution_role_arn}.

---

##### `egress_network_connector_arn`<sup>Optional</sup> <a name="egress_network_connector_arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.egressNetworkConnectorArn"></a>

```python
egress_network_connector_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#egress_network_connector_arn LambdawebFunctionRevision#egress_network_connector_arn}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#environment_variables LambdawebFunctionRevision#environment_variables}.

---

##### `max_concurrency_per_environment`<sup>Optional</sup> <a name="max_concurrency_per_environment" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment"></a>

```python
max_concurrency_per_environment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#max_concurrency_per_environment LambdawebFunctionRevision#max_concurrency_per_environment}.

---

##### `telemetry_config`<sup>Optional</sup> <a name="telemetry_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.telemetryConfig"></a>

```python
telemetry_config: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>]

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#telemetry_config LambdawebFunctionRevision#telemetry_config}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#timeout_seconds LambdawebFunctionRevision#timeout_seconds}.

---

### LambdawebFunctionRevisionServiceConfigTelemetryConfig <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig(
  logging_config: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig">logging_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>]</code> | logging_config block. |

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig"></a>

```python
logging_config: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>]

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#logging_config LambdawebFunctionRevision#logging_config}

---

### LambdawebFunctionRevisionServiceConfigTelemetryConfigActual <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActual" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual()
```


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig()
```


### LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig(
  application_log_level: str = None,
  log_group: str = None,
  system_log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel">application_log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#application_log_level LambdawebFunctionRevision#application_log_level}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#log_group LambdawebFunctionRevision#log_group}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#system_log_level LambdawebFunctionRevision#system_log_level}. |

---

##### `application_log_level`<sup>Optional</sup> <a name="application_log_level" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel"></a>

```python
application_log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#application_log_level LambdawebFunctionRevision#application_log_level}.

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#log_group LambdawebFunctionRevision#log_group}.

---

##### `system_log_level`<sup>Optional</sup> <a name="system_log_level" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#system_log_level LambdawebFunctionRevision#system_log_level}.

---

### LambdawebFunctionRevisionTimeouts <a name="LambdawebFunctionRevisionTimeouts" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_revision#create LambdawebFunctionRevision#create}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdawebFunctionRevisionBuildConfigCodeConfigList <a name="LambdawebFunctionRevisionBuildConfigCodeConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>]

---


### LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object">put_s3_object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resetS3Object">reset_s3_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_object` <a name="put_s3_object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object"></a>

```python
def put_s3_object(
  value: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfigS3Object]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>]

---

##### `reset_s3_object` <a name="reset_s3_object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.resetS3Object"></a>

```python
def reset_s3_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">s3_object</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList">LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput">s3_object_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_object`<sup>Required</sup> <a name="s3_object" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```python
s3_object: LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList">LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList</a>

---

##### `s3_object_input`<sup>Optional</sup> <a name="s3_object_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput"></a>

```python
s3_object_input: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfigS3Object]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>

---


### LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList <a name="LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfigS3Object]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>]

---


### LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version_id` <a name="reset_version_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId"></a>

```python
def reset_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionRevisionBuildConfigCodeConfigS3Object
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigS3Object">LambdawebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### LambdawebFunctionRevisionBuildConfigList <a name="LambdawebFunctionRevisionBuildConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionRevisionBuildConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>]

---


### LambdawebFunctionRevisionBuildConfigOutputReference <a name="LambdawebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putCodeConfig">put_code_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig">put_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetCodeConfig">reset_code_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetRuntimeConfig">reset_runtime_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_config` <a name="put_code_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putCodeConfig"></a>

```python
def put_code_config(
  value: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putCodeConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>]

---

##### `put_runtime_config` <a name="put_runtime_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig"></a>

```python
def put_runtime_config(
  value: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigRuntimeConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>]

---

##### `reset_code_config` <a name="reset_code_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetCodeConfig"></a>

```python
def reset_code_config() -> None
```

##### `reset_runtime_config` <a name="reset_runtime_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.resetRuntimeConfig"></a>

```python
def reset_runtime_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfig">code_config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList">LambdawebFunctionRevisionBuildConfigCodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList">LambdawebFunctionRevisionBuildConfigRuntimeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput">code_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput">runtime_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_config`<sup>Required</sup> <a name="code_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```python
code_config: LambdawebFunctionRevisionBuildConfigCodeConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfigList">LambdawebFunctionRevisionBuildConfigCodeConfigList</a>

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```python
runtime_config: LambdawebFunctionRevisionBuildConfigRuntimeConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList">LambdawebFunctionRevisionBuildConfigRuntimeConfigList</a>

---

##### `code_config_input`<sup>Optional</sup> <a name="code_config_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput"></a>

```python
code_config_input: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigCodeConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigCodeConfig">LambdawebFunctionRevisionBuildConfigCodeConfig</a>]

---

##### `runtime_config_input`<sup>Optional</sup> <a name="runtime_config_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput"></a>

```python
runtime_config_input: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigRuntimeConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionRevisionBuildConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfig">LambdawebFunctionRevisionBuildConfig</a>

---


### LambdawebFunctionRevisionBuildConfigRuntimeConfigList <a name="LambdawebFunctionRevisionBuildConfigRuntimeConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionRevisionBuildConfigRuntimeConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>]

---


### LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionRevisionBuildConfigRuntimeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionBuildConfigRuntimeConfig">LambdawebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### LambdawebFunctionRevisionServiceConfigList <a name="LambdawebFunctionRevisionServiceConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionRevisionServiceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>]

---


### LambdawebFunctionRevisionServiceConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig">put_telemetry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEgressNetworkConnectorArn">reset_egress_network_connector_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment">reset_max_concurrency_per_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig">reset_telemetry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_telemetry_config` <a name="put_telemetry_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig"></a>

```python
def put_telemetry_config(
  value: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>]

---

##### `reset_egress_network_connector_arn` <a name="reset_egress_network_connector_arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEgressNetworkConnectorArn"></a>

```python
def reset_egress_network_connector_arn() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_max_concurrency_per_environment` <a name="reset_max_concurrency_per_environment" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment"></a>

```python
def reset_max_concurrency_per_environment() -> None
```

##### `reset_telemetry_config` <a name="reset_telemetry_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig"></a>

```python
def reset_telemetry_config() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigActual">telemetry_config_actual</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArnInput">egress_network_connector_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput">max_concurrency_per_environment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput">telemetry_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArn">egress_network_connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">max_concurrency_per_environment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `telemetry_config`<sup>Required</sup> <a name="telemetry_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```python
telemetry_config: LambdawebFunctionRevisionServiceConfigTelemetryConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigList</a>

---

##### `telemetry_config_actual`<sup>Required</sup> <a name="telemetry_config_actual" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigActual"></a>

```python
telemetry_config_actual: LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList</a>

---

##### `egress_network_connector_arn_input`<sup>Optional</sup> <a name="egress_network_connector_arn_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArnInput"></a>

```python
egress_network_connector_arn_input: str
```

- *Type:* str

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `max_concurrency_per_environment_input`<sup>Optional</sup> <a name="max_concurrency_per_environment_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput"></a>

```python
max_concurrency_per_environment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `telemetry_config_input`<sup>Optional</sup> <a name="telemetry_config_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput"></a>

```python
telemetry_config_input: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>]

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `egress_network_connector_arn`<sup>Required</sup> <a name="egress_network_connector_arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.egressNetworkConnectorArn"></a>

```python
egress_network_connector_arn: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `max_concurrency_per_environment`<sup>Required</sup> <a name="max_concurrency_per_environment" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```python
max_concurrency_per_environment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionRevisionServiceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfig">LambdawebFunctionRevisionServiceConfig</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.applicationLogLevel">application_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_log_level`<sup>Required</sup> <a name="application_log_level" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.applicationLogLevel"></a>

```python
application_log_level: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `system_log_level`<sup>Required</sup> <a name="system_log_level" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfig</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual">LambdawebFunctionRevisionServiceConfigTelemetryConfigActual</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.loggingConfig"></a>

```python
logging_config: LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigActualLoggingConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActualOutputReference.property.internalValue"></a>

```python
internal_value: LambdawebFunctionRevisionServiceConfigTelemetryConfigActual
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigActual">LambdawebFunctionRevisionServiceConfigTelemetryConfigActual</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>]

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>]

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel">reset_application_log_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel">reset_system_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_log_level` <a name="reset_application_log_level" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```python
def reset_application_log_level() -> None
```

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```

##### `reset_system_log_level` <a name="reset_system_log_level" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel"></a>

```python
def reset_system_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput">application_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput">system_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">application_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_log_level_input`<sup>Optional</sup> <a name="application_log_level_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```python
application_log_level_input: str
```

- *Type:* str

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `system_log_level_input`<sup>Optional</sup> <a name="system_log_level_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```python
system_log_level_input: str
```

- *Type:* str

---

##### `application_log_level`<sup>Required</sup> <a name="application_log_level" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```python
application_log_level: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `system_log_level`<sup>Required</sup> <a name="system_log_level" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  value: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>]

---

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigList</a>

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: IResolvable | typing.List[LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionRevisionServiceConfigTelemetryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionServiceConfigTelemetryConfig">LambdawebFunctionRevisionServiceConfigTelemetryConfig</a>

---


### LambdawebFunctionRevisionTimeoutsOutputReference <a name="LambdawebFunctionRevisionTimeoutsOutputReference" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdaweb_function_revision

lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdawebFunctionRevisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdawebFunctionRevision.LambdawebFunctionRevisionTimeouts">LambdawebFunctionRevisionTimeouts</a>

---



