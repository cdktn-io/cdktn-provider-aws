# `lambdamicrovmsImage` Submodule <a name="`lambdamicrovmsImage` Submodule" id="@cdktn/provider-aws.lambdamicrovmsImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdamicrovmsImage <a name="LambdamicrovmsImage" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image aws_lambdamicrovms_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  base_image_arn: str,
  build_role_arn: str,
  name: str,
  additional_os_capabilities: typing.List[str] = None,
  base_image_version: str = None,
  code_artifact: IResolvable | typing.List[LambdamicrovmsImageCodeArtifact] = None,
  cpu_configuration: IResolvable | typing.List[LambdamicrovmsImageCpuConfiguration] = None,
  description: str = None,
  egress_network_connectors: typing.List[str] = None,
  environment_variables: typing.Mapping[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LambdamicrovmsImageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.baseImageArn">base_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.buildRoleArn">build_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.additionalOsCapabilities">additional_os_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.baseImageVersion">base_image_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.codeArtifact">code_artifact</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>]</code> | code_artifact block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.cpuConfiguration">cpu_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>]</code> | cpu_configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `base_image_arn`<sup>Required</sup> <a name="base_image_arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.baseImageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}.

---

##### `build_role_arn`<sup>Required</sup> <a name="build_role_arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.buildRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}.

---

##### `additional_os_capabilities`<sup>Optional</sup> <a name="additional_os_capabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.additionalOsCapabilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}.

---

##### `base_image_version`<sup>Optional</sup> <a name="base_image_version" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.baseImageVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}.

---

##### `code_artifact`<sup>Optional</sup> <a name="code_artifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.codeArtifact"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>]

code_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#code_artifact LambdamicrovmsImage#code_artifact}

---

##### `cpu_configuration`<sup>Optional</sup> <a name="cpu_configuration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.cpuConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>]

cpu_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#cpu_configuration LambdamicrovmsImage#cpu_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}.

---

##### `egress_network_connectors`<sup>Optional</sup> <a name="egress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.egressNetworkConnectors"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#region LambdamicrovmsImage#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#timeouts LambdamicrovmsImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact">put_code_artifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration">put_cpu_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetAdditionalOsCapabilities">reset_additional_os_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetBaseImageVersion">reset_base_image_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCodeArtifact">reset_code_artifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCpuConfiguration">reset_cpu_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEgressNetworkConnectors">reset_egress_network_connectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_code_artifact` <a name="put_code_artifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact"></a>

```python
def put_code_artifact(
  value: IResolvable | typing.List[LambdamicrovmsImageCodeArtifact]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCodeArtifact.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>]

---

##### `put_cpu_configuration` <a name="put_cpu_configuration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration"></a>

```python
def put_cpu_configuration(
  value: IResolvable | typing.List[LambdamicrovmsImageCpuConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putCpuConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#create LambdamicrovmsImage#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#delete LambdamicrovmsImage#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#update LambdamicrovmsImage#update}

---

##### `reset_additional_os_capabilities` <a name="reset_additional_os_capabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetAdditionalOsCapabilities"></a>

```python
def reset_additional_os_capabilities() -> None
```

##### `reset_base_image_version` <a name="reset_base_image_version" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetBaseImageVersion"></a>

```python
def reset_base_image_version() -> None
```

##### `reset_code_artifact` <a name="reset_code_artifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCodeArtifact"></a>

```python
def reset_code_artifact() -> None
```

##### `reset_cpu_configuration` <a name="reset_cpu_configuration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetCpuConfiguration"></a>

```python
def reset_cpu_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_egress_network_connectors` <a name="reset_egress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEgressNetworkConnectors"></a>

```python
def reset_egress_network_connectors() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdamicrovmsImage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdamicrovmsImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdamicrovmsImage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdamicrovmsImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdamicrovmsImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifact">code_artifact</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList">LambdamicrovmsImageCodeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfiguration">cpu_configuration</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList">LambdamicrovmsImageCpuConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.imageVersion">image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestActiveImageVersion">latest_active_image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestFailedImageVersion">latest_failed_image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference">LambdamicrovmsImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilitiesInput">additional_os_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArnInput">base_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersionInput">base_image_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArnInput">build_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifactInput">code_artifact_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfigurationInput">cpu_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectorsInput">egress_network_connectors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilities">additional_os_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArn">base_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersion">base_image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArn">build_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `code_artifact`<sup>Required</sup> <a name="code_artifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifact"></a>

```python
code_artifact: LambdamicrovmsImageCodeArtifactList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList">LambdamicrovmsImageCodeArtifactList</a>

---

##### `cpu_configuration`<sup>Required</sup> <a name="cpu_configuration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfiguration"></a>

```python
cpu_configuration: LambdamicrovmsImageCpuConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList">LambdamicrovmsImageCpuConfigurationList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `image_version`<sup>Required</sup> <a name="image_version" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

---

##### `latest_active_image_version`<sup>Required</sup> <a name="latest_active_image_version" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestActiveImageVersion"></a>

```python
latest_active_image_version: str
```

- *Type:* str

---

##### `latest_failed_image_version`<sup>Required</sup> <a name="latest_failed_image_version" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.latestFailedImageVersion"></a>

```python
latest_failed_image_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeouts"></a>

```python
timeouts: LambdamicrovmsImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference">LambdamicrovmsImageTimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `additional_os_capabilities_input`<sup>Optional</sup> <a name="additional_os_capabilities_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilitiesInput"></a>

```python
additional_os_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `base_image_arn_input`<sup>Optional</sup> <a name="base_image_arn_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArnInput"></a>

```python
base_image_arn_input: str
```

- *Type:* str

---

##### `base_image_version_input`<sup>Optional</sup> <a name="base_image_version_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersionInput"></a>

```python
base_image_version_input: str
```

- *Type:* str

---

##### `build_role_arn_input`<sup>Optional</sup> <a name="build_role_arn_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArnInput"></a>

```python
build_role_arn_input: str
```

- *Type:* str

---

##### `code_artifact_input`<sup>Optional</sup> <a name="code_artifact_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.codeArtifactInput"></a>

```python
code_artifact_input: IResolvable | typing.List[LambdamicrovmsImageCodeArtifact]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>]

---

##### `cpu_configuration_input`<sup>Optional</sup> <a name="cpu_configuration_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.cpuConfigurationInput"></a>

```python
cpu_configuration_input: IResolvable | typing.List[LambdamicrovmsImageCpuConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `egress_network_connectors_input`<sup>Optional</sup> <a name="egress_network_connectors_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectorsInput"></a>

```python
egress_network_connectors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | LambdamicrovmsImageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---

##### `additional_os_capabilities`<sup>Required</sup> <a name="additional_os_capabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.additionalOsCapabilities"></a>

```python
additional_os_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `base_image_arn`<sup>Required</sup> <a name="base_image_arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageArn"></a>

```python
base_image_arn: str
```

- *Type:* str

---

##### `base_image_version`<sup>Required</sup> <a name="base_image_version" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.baseImageVersion"></a>

```python
base_image_version: str
```

- *Type:* str

---

##### `build_role_arn`<sup>Required</sup> <a name="build_role_arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.buildRoleArn"></a>

```python
build_role_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `egress_network_connectors`<sup>Required</sup> <a name="egress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.egressNetworkConnectors"></a>

```python
egress_network_connectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdamicrovmsImageCodeArtifact <a name="LambdamicrovmsImageCodeArtifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact(
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#uri LambdamicrovmsImage#uri}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#uri LambdamicrovmsImage#uri}.

---

### LambdamicrovmsImageConfig <a name="LambdamicrovmsImageConfig" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  base_image_arn: str,
  build_role_arn: str,
  name: str,
  additional_os_capabilities: typing.List[str] = None,
  base_image_version: str = None,
  code_artifact: IResolvable | typing.List[LambdamicrovmsImageCodeArtifact] = None,
  cpu_configuration: IResolvable | typing.List[LambdamicrovmsImageCpuConfiguration] = None,
  description: str = None,
  egress_network_connectors: typing.List[str] = None,
  environment_variables: typing.Mapping[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LambdamicrovmsImageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageArn">base_image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.buildRoleArn">build_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.additionalOsCapabilities">additional_os_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageVersion">base_image_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.codeArtifact">code_artifact</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>]</code> | code_artifact block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.cpuConfiguration">cpu_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>]</code> | cpu_configuration block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `base_image_arn`<sup>Required</sup> <a name="base_image_arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageArn"></a>

```python
base_image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_arn LambdamicrovmsImage#base_image_arn}.

---

##### `build_role_arn`<sup>Required</sup> <a name="build_role_arn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.buildRoleArn"></a>

```python
build_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#build_role_arn LambdamicrovmsImage#build_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#name LambdamicrovmsImage#name}.

---

##### `additional_os_capabilities`<sup>Optional</sup> <a name="additional_os_capabilities" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.additionalOsCapabilities"></a>

```python
additional_os_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#additional_os_capabilities LambdamicrovmsImage#additional_os_capabilities}.

---

##### `base_image_version`<sup>Optional</sup> <a name="base_image_version" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.baseImageVersion"></a>

```python
base_image_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#base_image_version LambdamicrovmsImage#base_image_version}.

---

##### `code_artifact`<sup>Optional</sup> <a name="code_artifact" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.codeArtifact"></a>

```python
code_artifact: IResolvable | typing.List[LambdamicrovmsImageCodeArtifact]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>]

code_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#code_artifact LambdamicrovmsImage#code_artifact}

---

##### `cpu_configuration`<sup>Optional</sup> <a name="cpu_configuration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.cpuConfiguration"></a>

```python
cpu_configuration: IResolvable | typing.List[LambdamicrovmsImageCpuConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>]

cpu_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#cpu_configuration LambdamicrovmsImage#cpu_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#description LambdamicrovmsImage#description}.

---

##### `egress_network_connectors`<sup>Optional</sup> <a name="egress_network_connectors" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.egressNetworkConnectors"></a>

```python
egress_network_connectors: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#egress_network_connectors LambdamicrovmsImage#egress_network_connectors}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#environment_variables LambdamicrovmsImage#environment_variables}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#region LambdamicrovmsImage#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#tags LambdamicrovmsImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageConfig.property.timeouts"></a>

```python
timeouts: LambdamicrovmsImageTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#timeouts LambdamicrovmsImage#timeouts}

---

### LambdamicrovmsImageCpuConfiguration <a name="LambdamicrovmsImageCpuConfiguration" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration(
  architecture: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.property.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#architecture LambdamicrovmsImage#architecture}. |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#architecture LambdamicrovmsImage#architecture}.

---

### LambdamicrovmsImageTimeouts <a name="LambdamicrovmsImageTimeouts" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImageTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#create LambdamicrovmsImage#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#delete LambdamicrovmsImage#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/lambdamicrovms_image#update LambdamicrovmsImage#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdamicrovmsImageCodeArtifactList <a name="LambdamicrovmsImageCodeArtifactList" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdamicrovmsImageCodeArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdamicrovmsImageCodeArtifact]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>]

---


### LambdamicrovmsImageCodeArtifactOutputReference <a name="LambdamicrovmsImageCodeArtifactOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifactOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdamicrovmsImageCodeArtifact
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCodeArtifact">LambdamicrovmsImageCodeArtifact</a>

---


### LambdamicrovmsImageCpuConfigurationList <a name="LambdamicrovmsImageCpuConfigurationList" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdamicrovmsImageCpuConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdamicrovmsImageCpuConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>]

---


### LambdamicrovmsImageCpuConfigurationOutputReference <a name="LambdamicrovmsImageCpuConfigurationOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdamicrovmsImageCpuConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageCpuConfiguration">LambdamicrovmsImageCpuConfiguration</a>

---


### LambdamicrovmsImageTimeoutsOutputReference <a name="LambdamicrovmsImageTimeoutsOutputReference" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import lambdamicrovms_image

lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdamicrovmsImageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.lambdamicrovmsImage.LambdamicrovmsImageTimeouts">LambdamicrovmsImageTimeouts</a>

---



