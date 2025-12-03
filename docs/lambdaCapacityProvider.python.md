# `lambdaCapacityProvider` Submodule <a name="`lambdaCapacityProvider` Submodule" id="@cdktf/provider-aws.lambdaCapacityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaCapacityProvider <a name="LambdaCapacityProvider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider aws_lambda_capacity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProvider(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  capacity_provider_scaling_config: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfig] = None,
  instance_requirements: IResolvable | typing.List[LambdaCapacityProviderInstanceRequirements] = None,
  kms_key_arn: str = None,
  permissions_config: IResolvable | typing.List[LambdaCapacityProviderPermissionsConfig] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LambdaCapacityProviderTimeouts = None,
  vpc_config: IResolvable | typing.List[LambdaCapacityProviderVpcConfig] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#name LambdaCapacityProvider#name}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.capacityProviderScalingConfig">capacity_provider_scaling_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.instanceRequirements">instance_requirements</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.permissionsConfig">permissions_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>]</code> | permissions_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>]</code> | vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#name LambdaCapacityProvider#name}.

---

##### `capacity_provider_scaling_config`<sup>Optional</sup> <a name="capacity_provider_scaling_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.capacityProviderScalingConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}.

---

##### `instance_requirements`<sup>Optional</sup> <a name="instance_requirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.instanceRequirements"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}.

---

##### `permissions_config`<sup>Optional</sup> <a name="permissions_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.permissionsConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>]

permissions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#permissions_config LambdaCapacityProvider#permissions_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#region LambdaCapacityProvider#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#timeouts LambdaCapacityProvider#timeouts}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.Initializer.parameter.vpcConfig"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#vpc_config LambdaCapacityProvider#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig">put_capacity_provider_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements">put_instance_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig">put_permissions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderScalingConfig">reset_capacity_provider_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetInstanceRequirements">reset_instance_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetPermissionsConfig">reset_permissions_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity_provider_scaling_config` <a name="put_capacity_provider_scaling_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig"></a>

```python
def put_capacity_provider_scaling_config(
  value: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putCapacityProviderScalingConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>]

---

##### `put_instance_requirements` <a name="put_instance_requirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements"></a>

```python
def put_instance_requirements(
  value: IResolvable | typing.List[LambdaCapacityProviderInstanceRequirements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putInstanceRequirements.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>]

---

##### `put_permissions_config` <a name="put_permissions_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig"></a>

```python
def put_permissions_config(
  value: IResolvable | typing.List[LambdaCapacityProviderPermissionsConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putPermissionsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#create LambdaCapacityProvider#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#delete LambdaCapacityProvider#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#update LambdaCapacityProvider#update}

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig"></a>

```python
def put_vpc_config(
  value: IResolvable | typing.List[LambdaCapacityProviderVpcConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.putVpcConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>]

---

##### `reset_capacity_provider_scaling_config` <a name="reset_capacity_provider_scaling_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetCapacityProviderScalingConfig"></a>

```python
def reset_capacity_provider_scaling_config() -> None
```

##### `reset_instance_requirements` <a name="reset_instance_requirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetInstanceRequirements"></a>

```python
def reset_instance_requirements() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_permissions_config` <a name="reset_permissions_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetPermissionsConfig"></a>

```python
def reset_permissions_config() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LambdaCapacityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LambdaCapacityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaCapacityProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaCapacityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LambdaCapacityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfig">capacity_provider_scaling_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList">LambdaCapacityProviderCapacityProviderScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirements">instance_requirements</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList">LambdaCapacityProviderInstanceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfig">permissions_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList">LambdaCapacityProviderPermissionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference">LambdaCapacityProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList">LambdaCapacityProviderVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfigInput">capacity_provider_scaling_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirementsInput">instance_requirements_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfigInput">permissions_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_provider_scaling_config`<sup>Required</sup> <a name="capacity_provider_scaling_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfig"></a>

```python
capacity_provider_scaling_config: LambdaCapacityProviderCapacityProviderScalingConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList">LambdaCapacityProviderCapacityProviderScalingConfigList</a>

---

##### `instance_requirements`<sup>Required</sup> <a name="instance_requirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirements"></a>

```python
instance_requirements: LambdaCapacityProviderInstanceRequirementsList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList">LambdaCapacityProviderInstanceRequirementsList</a>

---

##### `permissions_config`<sup>Required</sup> <a name="permissions_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfig"></a>

```python
permissions_config: LambdaCapacityProviderPermissionsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList">LambdaCapacityProviderPermissionsConfigList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.timeouts"></a>

```python
timeouts: LambdaCapacityProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference">LambdaCapacityProviderTimeoutsOutputReference</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfig"></a>

```python
vpc_config: LambdaCapacityProviderVpcConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList">LambdaCapacityProviderVpcConfigList</a>

---

##### `capacity_provider_scaling_config_input`<sup>Optional</sup> <a name="capacity_provider_scaling_config_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.capacityProviderScalingConfigInput"></a>

```python
capacity_provider_scaling_config_input: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>]

---

##### `instance_requirements_input`<sup>Optional</sup> <a name="instance_requirements_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.instanceRequirementsInput"></a>

```python
instance_requirements_input: IResolvable | typing.List[LambdaCapacityProviderInstanceRequirements]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permissions_config_input`<sup>Optional</sup> <a name="permissions_config_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.permissionsConfigInput"></a>

```python
permissions_config_input: IResolvable | typing.List[LambdaCapacityProviderPermissionsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | LambdaCapacityProviderTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a>

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | typing.List[LambdaCapacityProviderVpcConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaCapacityProviderCapacityProviderScalingConfig <a name="LambdaCapacityProviderCapacityProviderScalingConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig(
  max_vcpu_count: typing.Union[int, float] = None,
  scaling_mode: str = None,
  scaling_policies: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.maxVcpuCount">max_vcpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#max_vcpu_count LambdaCapacityProvider#max_vcpu_count}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingMode">scaling_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#scaling_mode LambdaCapacityProvider#scaling_mode}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingPolicies">scaling_policies</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#scaling_policies LambdaCapacityProvider#scaling_policies}. |

---

##### `max_vcpu_count`<sup>Optional</sup> <a name="max_vcpu_count" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.maxVcpuCount"></a>

```python
max_vcpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#max_vcpu_count LambdaCapacityProvider#max_vcpu_count}.

---

##### `scaling_mode`<sup>Optional</sup> <a name="scaling_mode" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingMode"></a>

```python
scaling_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#scaling_mode LambdaCapacityProvider#scaling_mode}.

---

##### `scaling_policies`<sup>Optional</sup> <a name="scaling_policies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig.property.scalingPolicies"></a>

```python
scaling_policies: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#scaling_policies LambdaCapacityProvider#scaling_policies}.

---

### LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies(
  predefined_metric_type: str = None,
  target_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.predefinedMetricType">predefined_metric_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#predefined_metric_type LambdaCapacityProvider#predefined_metric_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#target_value LambdaCapacityProvider#target_value}. |

---

##### `predefined_metric_type`<sup>Optional</sup> <a name="predefined_metric_type" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.predefinedMetricType"></a>

```python
predefined_metric_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#predefined_metric_type LambdaCapacityProvider#predefined_metric_type}.

---

##### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#target_value LambdaCapacityProvider#target_value}.

---

### LambdaCapacityProviderConfig <a name="LambdaCapacityProviderConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  capacity_provider_scaling_config: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfig] = None,
  instance_requirements: IResolvable | typing.List[LambdaCapacityProviderInstanceRequirements] = None,
  kms_key_arn: str = None,
  permissions_config: IResolvable | typing.List[LambdaCapacityProviderPermissionsConfig] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: LambdaCapacityProviderTimeouts = None,
  vpc_config: IResolvable | typing.List[LambdaCapacityProviderVpcConfig] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#name LambdaCapacityProvider#name}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderScalingConfig">capacity_provider_scaling_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.instanceRequirements">instance_requirements</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.permissionsConfig">permissions_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>]</code> | permissions_config block. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.vpcConfig">vpc_config</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>]</code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#name LambdaCapacityProvider#name}.

---

##### `capacity_provider_scaling_config`<sup>Optional</sup> <a name="capacity_provider_scaling_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.capacityProviderScalingConfig"></a>

```python
capacity_provider_scaling_config: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#capacity_provider_scaling_config LambdaCapacityProvider#capacity_provider_scaling_config}.

---

##### `instance_requirements`<sup>Optional</sup> <a name="instance_requirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.instanceRequirements"></a>

```python
instance_requirements: IResolvable | typing.List[LambdaCapacityProviderInstanceRequirements]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#instance_requirements LambdaCapacityProvider#instance_requirements}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#kms_key_arn LambdaCapacityProvider#kms_key_arn}.

---

##### `permissions_config`<sup>Optional</sup> <a name="permissions_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.permissionsConfig"></a>

```python
permissions_config: IResolvable | typing.List[LambdaCapacityProviderPermissionsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>]

permissions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#permissions_config LambdaCapacityProvider#permissions_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#region LambdaCapacityProvider#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#tags LambdaCapacityProvider#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.timeouts"></a>

```python
timeouts: LambdaCapacityProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#timeouts LambdaCapacityProvider#timeouts}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderConfig.property.vpcConfig"></a>

```python
vpc_config: IResolvable | typing.List[LambdaCapacityProviderVpcConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#vpc_config LambdaCapacityProvider#vpc_config}

---

### LambdaCapacityProviderInstanceRequirements <a name="LambdaCapacityProviderInstanceRequirements" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements(
  allowed_instance_types: typing.List[str] = None,
  architectures: typing.List[str] = None,
  excluded_instance_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.allowedInstanceTypes">allowed_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#allowed_instance_types LambdaCapacityProvider#allowed_instance_types}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#architectures LambdaCapacityProvider#architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#excluded_instance_types LambdaCapacityProvider#excluded_instance_types}. |

---

##### `allowed_instance_types`<sup>Optional</sup> <a name="allowed_instance_types" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.allowedInstanceTypes"></a>

```python
allowed_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#allowed_instance_types LambdaCapacityProvider#allowed_instance_types}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#architectures LambdaCapacityProvider#architectures}.

---

##### `excluded_instance_types`<sup>Optional</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#excluded_instance_types LambdaCapacityProvider#excluded_instance_types}.

---

### LambdaCapacityProviderPermissionsConfig <a name="LambdaCapacityProviderPermissionsConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig(
  capacity_provider_operator_role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.property.capacityProviderOperatorRoleArn">capacity_provider_operator_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#capacity_provider_operator_role_arn LambdaCapacityProvider#capacity_provider_operator_role_arn}. |

---

##### `capacity_provider_operator_role_arn`<sup>Required</sup> <a name="capacity_provider_operator_role_arn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig.property.capacityProviderOperatorRoleArn"></a>

```python
capacity_provider_operator_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#capacity_provider_operator_role_arn LambdaCapacityProvider#capacity_provider_operator_role_arn}.

---

### LambdaCapacityProviderTimeouts <a name="LambdaCapacityProviderTimeouts" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#create LambdaCapacityProvider#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#delete LambdaCapacityProvider#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#update LambdaCapacityProvider#update}

---

### LambdaCapacityProviderVpcConfig <a name="LambdaCapacityProviderVpcConfig" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderVpcConfig(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#security_group_ids LambdaCapacityProvider#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#subnet_ids LambdaCapacityProvider#subnet_ids}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#security_group_ids LambdaCapacityProvider#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/lambda_capacity_provider#subnet_ids LambdaCapacityProvider#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaCapacityProviderCapacityProviderScalingConfigList <a name="LambdaCapacityProviderCapacityProviderScalingConfigList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaCapacityProviderCapacityProviderScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>]

---


### LambdaCapacityProviderCapacityProviderScalingConfigOutputReference <a name="LambdaCapacityProviderCapacityProviderScalingConfigOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies">put_scaling_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetMaxVcpuCount">reset_max_vcpu_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingMode">reset_scaling_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingPolicies">reset_scaling_policies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scaling_policies` <a name="put_scaling_policies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies"></a>

```python
def put_scaling_policies(
  value: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.putScalingPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>]

---

##### `reset_max_vcpu_count` <a name="reset_max_vcpu_count" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetMaxVcpuCount"></a>

```python
def reset_max_vcpu_count() -> None
```

##### `reset_scaling_mode` <a name="reset_scaling_mode" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingMode"></a>

```python
def reset_scaling_mode() -> None
```

##### `reset_scaling_policies` <a name="reset_scaling_policies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.resetScalingPolicies"></a>

```python
def reset_scaling_policies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies">scaling_policies</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVcpuCountInput">max_vcpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingModeInput">scaling_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPoliciesInput">scaling_policies_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVcpuCount">max_vcpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode">scaling_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scaling_policies`<sup>Required</sup> <a name="scaling_policies" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPolicies"></a>

```python
scaling_policies: LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList">LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList</a>

---

##### `max_vcpu_count_input`<sup>Optional</sup> <a name="max_vcpu_count_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVcpuCountInput"></a>

```python
max_vcpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_mode_input`<sup>Optional</sup> <a name="scaling_mode_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingModeInput"></a>

```python
scaling_mode_input: str
```

- *Type:* str

---

##### `scaling_policies_input`<sup>Optional</sup> <a name="scaling_policies_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingPoliciesInput"></a>

```python
scaling_policies_input: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>]

---

##### `max_vcpu_count`<sup>Required</sup> <a name="max_vcpu_count" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.maxVcpuCount"></a>

```python
max_vcpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_mode`<sup>Required</sup> <a name="scaling_mode" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.scalingMode"></a>

```python
scaling_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfig">LambdaCapacityProviderCapacityProviderScalingConfig</a>

---


### LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>]

---


### LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference <a name="LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetPredefinedMetricType">reset_predefined_metric_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetTargetValue">reset_target_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_predefined_metric_type` <a name="reset_predefined_metric_type" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetPredefinedMetricType"></a>

```python
def reset_predefined_metric_type() -> None
```

##### `reset_target_value` <a name="reset_target_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.resetTargetValue"></a>

```python
def reset_target_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricTypeInput">predefined_metric_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValueInput">target_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType">predefined_metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_metric_type_input`<sup>Optional</sup> <a name="predefined_metric_type_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricTypeInput"></a>

```python
predefined_metric_type_input: str
```

- *Type:* str

---

##### `target_value_input`<sup>Optional</sup> <a name="target_value_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValueInput"></a>

```python
target_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `predefined_metric_type`<sup>Required</sup> <a name="predefined_metric_type" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.predefinedMetricType"></a>

```python
predefined_metric_type: str
```

- *Type:* str

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies">LambdaCapacityProviderCapacityProviderScalingConfigScalingPolicies</a>

---


### LambdaCapacityProviderInstanceRequirementsList <a name="LambdaCapacityProviderInstanceRequirementsList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaCapacityProviderInstanceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaCapacityProviderInstanceRequirements]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>]

---


### LambdaCapacityProviderInstanceRequirementsOutputReference <a name="LambdaCapacityProviderInstanceRequirementsOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetAllowedInstanceTypes">reset_allowed_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetArchitectures">reset_architectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetExcludedInstanceTypes">reset_excluded_instance_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_instance_types` <a name="reset_allowed_instance_types" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetAllowedInstanceTypes"></a>

```python
def reset_allowed_instance_types() -> None
```

##### `reset_architectures` <a name="reset_architectures" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetArchitectures"></a>

```python
def reset_architectures() -> None
```

##### `reset_excluded_instance_types` <a name="reset_excluded_instance_types" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```python
def reset_excluded_instance_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">allowed_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architecturesInput">architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">excluded_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowed_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_instance_types_input`<sup>Optional</sup> <a name="allowed_instance_types_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```python
allowed_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `architectures_input`<sup>Optional</sup> <a name="architectures_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architecturesInput"></a>

```python
architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_instance_types_input`<sup>Optional</sup> <a name="excluded_instance_types_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```python
excluded_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_instance_types`<sup>Required</sup> <a name="allowed_instance_types" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```python
allowed_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_instance_types`<sup>Required</sup> <a name="excluded_instance_types" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaCapacityProviderInstanceRequirements
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderInstanceRequirements">LambdaCapacityProviderInstanceRequirements</a>

---


### LambdaCapacityProviderPermissionsConfigList <a name="LambdaCapacityProviderPermissionsConfigList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaCapacityProviderPermissionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaCapacityProviderPermissionsConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>]

---


### LambdaCapacityProviderPermissionsConfigOutputReference <a name="LambdaCapacityProviderPermissionsConfigOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArnInput">capacity_provider_operator_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn">capacity_provider_operator_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_provider_operator_role_arn_input`<sup>Optional</sup> <a name="capacity_provider_operator_role_arn_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArnInput"></a>

```python
capacity_provider_operator_role_arn_input: str
```

- *Type:* str

---

##### `capacity_provider_operator_role_arn`<sup>Required</sup> <a name="capacity_provider_operator_role_arn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.capacityProviderOperatorRoleArn"></a>

```python
capacity_provider_operator_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaCapacityProviderPermissionsConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderPermissionsConfig">LambdaCapacityProviderPermissionsConfig</a>

---


### LambdaCapacityProviderTimeoutsOutputReference <a name="LambdaCapacityProviderTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaCapacityProviderTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderTimeouts">LambdaCapacityProviderTimeouts</a>

---


### LambdaCapacityProviderVpcConfigList <a name="LambdaCapacityProviderVpcConfigList" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaCapacityProviderVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaCapacityProviderVpcConfig]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>]

---


### LambdaCapacityProviderVpcConfigOutputReference <a name="LambdaCapacityProviderVpcConfigOutputReference" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_capacity_provider

lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaCapacityProviderVpcConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lambdaCapacityProvider.LambdaCapacityProviderVpcConfig">LambdaCapacityProviderVpcConfig</a>

---



