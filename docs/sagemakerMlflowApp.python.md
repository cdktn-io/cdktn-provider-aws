# `sagemakerMlflowApp` Submodule <a name="`sagemakerMlflowApp` Submodule" id="@cdktn/provider-aws.sagemakerMlflowApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowApp <a name="SagemakerMlflowApp" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app aws_sagemaker_mlflow_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_store_uri: str,
  name: str,
  role_arn: str,
  account_default_status: str = None,
  default_domain_id_list: typing.List[str] = None,
  model_registration_mode: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SagemakerMlflowAppTimeouts = None,
  weekly_maintenance_window_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.artifactStoreUri">artifact_store_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.accountDefaultStatus">account_default_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#account_default_status SagemakerMlflowApp#account_default_status}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.defaultDomainIdList">default_domain_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#default_domain_id_list SagemakerMlflowApp#default_domain_id_list}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.modelRegistrationMode">model_registration_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_store_uri`<sup>Required</sup> <a name="artifact_store_uri" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.artifactStoreUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}.

---

##### `account_default_status`<sup>Optional</sup> <a name="account_default_status" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.accountDefaultStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#account_default_status SagemakerMlflowApp#account_default_status}.

---

##### `default_domain_id_list`<sup>Optional</sup> <a name="default_domain_id_list" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.defaultDomainIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#default_domain_id_list SagemakerMlflowApp#default_domain_id_list}.

---

##### `model_registration_mode`<sup>Optional</sup> <a name="model_registration_mode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.modelRegistrationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#region SagemakerMlflowApp#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#timeouts SagemakerMlflowApp#timeouts}

---

##### `weekly_maintenance_window_start`<sup>Optional</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.weeklyMaintenanceWindowStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetAccountDefaultStatus">reset_account_default_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetDefaultDomainIdList">reset_default_domain_id_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode">reset_model_registration_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart">reset_weekly_maintenance_window_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#create SagemakerMlflowApp#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#delete SagemakerMlflowApp#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#update SagemakerMlflowApp#update}

---

##### `reset_account_default_status` <a name="reset_account_default_status" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetAccountDefaultStatus"></a>

```python
def reset_account_default_status() -> None
```

##### `reset_default_domain_id_list` <a name="reset_default_domain_id_list" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetDefaultDomainIdList"></a>

```python
def reset_default_domain_id_list() -> None
```

##### `reset_model_registration_mode` <a name="reset_model_registration_mode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode"></a>

```python
def reset_model_registration_mode() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weekly_maintenance_window_start` <a name="reset_weekly_maintenance_window_start" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart"></a>

```python
def reset_weekly_maintenance_window_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct"></a>

```python
from cdktn_provider_aws import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement"></a>

```python
from cdktn_provider_aws import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource"></a>

```python
from cdktn_provider_aws import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport"></a>

```python
from cdktn_provider_aws import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerMlflowApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerMlflowApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference">SagemakerMlflowAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatusInput">account_default_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput">artifact_store_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdListInput">default_domain_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput">model_registration_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput">weekly_maintenance_window_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatus">account_default_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri">artifact_store_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdList">default_domain_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode">model_registration_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeouts"></a>

```python
timeouts: SagemakerMlflowAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference">SagemakerMlflowAppTimeoutsOutputReference</a>

---

##### `account_default_status_input`<sup>Optional</sup> <a name="account_default_status_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatusInput"></a>

```python
account_default_status_input: str
```

- *Type:* str

---

##### `artifact_store_uri_input`<sup>Optional</sup> <a name="artifact_store_uri_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput"></a>

```python
artifact_store_uri_input: str
```

- *Type:* str

---

##### `default_domain_id_list_input`<sup>Optional</sup> <a name="default_domain_id_list_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdListInput"></a>

```python
default_domain_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `model_registration_mode_input`<sup>Optional</sup> <a name="model_registration_mode_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput"></a>

```python
model_registration_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SagemakerMlflowAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

---

##### `weekly_maintenance_window_start_input`<sup>Optional</sup> <a name="weekly_maintenance_window_start_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput"></a>

```python
weekly_maintenance_window_start_input: str
```

- *Type:* str

---

##### `account_default_status`<sup>Required</sup> <a name="account_default_status" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatus"></a>

```python
account_default_status: str
```

- *Type:* str

---

##### `artifact_store_uri`<sup>Required</sup> <a name="artifact_store_uri" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri"></a>

```python
artifact_store_uri: str
```

- *Type:* str

---

##### `default_domain_id_list`<sup>Required</sup> <a name="default_domain_id_list" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdList"></a>

```python
default_domain_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `model_registration_mode`<sup>Required</sup> <a name="model_registration_mode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode"></a>

```python
model_registration_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `weekly_maintenance_window_start`<sup>Required</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart"></a>

```python
weekly_maintenance_window_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowAppConfig <a name="SagemakerMlflowAppConfig" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_store_uri: str,
  name: str,
  role_arn: str,
  account_default_status: str = None,
  default_domain_id_list: typing.List[str] = None,
  model_registration_mode: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SagemakerMlflowAppTimeouts = None,
  weekly_maintenance_window_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri">artifact_store_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.accountDefaultStatus">account_default_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#account_default_status SagemakerMlflowApp#account_default_status}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.defaultDomainIdList">default_domain_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#default_domain_id_list SagemakerMlflowApp#default_domain_id_list}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode">model_registration_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_store_uri`<sup>Required</sup> <a name="artifact_store_uri" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri"></a>

```python
artifact_store_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}.

---

##### `account_default_status`<sup>Optional</sup> <a name="account_default_status" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.accountDefaultStatus"></a>

```python
account_default_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#account_default_status SagemakerMlflowApp#account_default_status}.

---

##### `default_domain_id_list`<sup>Optional</sup> <a name="default_domain_id_list" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.defaultDomainIdList"></a>

```python
default_domain_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#default_domain_id_list SagemakerMlflowApp#default_domain_id_list}.

---

##### `model_registration_mode`<sup>Optional</sup> <a name="model_registration_mode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode"></a>

```python
model_registration_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#region SagemakerMlflowApp#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.timeouts"></a>

```python
timeouts: SagemakerMlflowAppTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#timeouts SagemakerMlflowApp#timeouts}

---

##### `weekly_maintenance_window_start`<sup>Optional</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart"></a>

```python
weekly_maintenance_window_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}.

---

### SagemakerMlflowAppTimeouts <a name="SagemakerMlflowAppTimeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowAppTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#create SagemakerMlflowApp#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#delete SagemakerMlflowApp#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#update SagemakerMlflowApp#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowAppTimeoutsOutputReference <a name="SagemakerMlflowAppTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerMlflowAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

---



