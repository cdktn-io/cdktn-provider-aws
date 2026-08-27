# `resiliencehubv2Policy` Submodule <a name="`resiliencehubv2Policy` Submodule" id="@cdktn/provider-aws.resiliencehubv2Policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Policy <a name="Resiliencehubv2Policy" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy aws_resiliencehubv2_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2Policy(
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
  availability_slo: IResolvable | typing.List[Resiliencehubv2PolicyAvailabilitySlo] = None,
  data_recovery: IResolvable | typing.List[Resiliencehubv2PolicyDataRecovery] = None,
  description: str = None,
  kms_key_id: str = None,
  multi_az: IResolvable | typing.List[Resiliencehubv2PolicyMultiAz] = None,
  multi_region: IResolvable | typing.List[Resiliencehubv2PolicyMultiRegion] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.availabilitySlo">availability_slo</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>]</code> | availability_slo block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.dataRecovery">data_recovery</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>]</code> | data_recovery block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.multiAz">multi_az</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>]</code> | multi_az block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.multiRegion">multi_region</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>]</code> | multi_region block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}.

---

##### `availability_slo`<sup>Optional</sup> <a name="availability_slo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.availabilitySlo"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>]

availability_slo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}

---

##### `data_recovery`<sup>Optional</sup> <a name="data_recovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.dataRecovery"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>]

data_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}.

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.multiAz"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>]

multi_az block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}

---

##### `multi_region`<sup>Optional</sup> <a name="multi_region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.multiRegion"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>]

multi_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#region Resiliencehubv2Policy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo">put_availability_slo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery">put_data_recovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz">put_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion">put_multi_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo">reset_availability_slo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery">reset_data_recovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion">reset_multi_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_availability_slo` <a name="put_availability_slo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo"></a>

```python
def put_availability_slo(
  value: IResolvable | typing.List[Resiliencehubv2PolicyAvailabilitySlo]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>]

---

##### `put_data_recovery` <a name="put_data_recovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery"></a>

```python
def put_data_recovery(
  value: IResolvable | typing.List[Resiliencehubv2PolicyDataRecovery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>]

---

##### `put_multi_az` <a name="put_multi_az" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz"></a>

```python
def put_multi_az(
  value: IResolvable | typing.List[Resiliencehubv2PolicyMultiAz]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>]

---

##### `put_multi_region` <a name="put_multi_region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion"></a>

```python
def put_multi_region(
  value: IResolvable | typing.List[Resiliencehubv2PolicyMultiRegion]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>]

---

##### `reset_availability_slo` <a name="reset_availability_slo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo"></a>

```python
def reset_availability_slo() -> None
```

##### `reset_data_recovery` <a name="reset_data_recovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery"></a>

```python
def reset_data_recovery() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz"></a>

```python
def reset_multi_az() -> None
```

##### `reset_multi_region` <a name="reset_multi_region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion"></a>

```python
def reset_multi_region() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2Policy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2Policy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2Policy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2Policy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Resiliencehubv2Policy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Resiliencehubv2Policy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Policy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo">availability_slo</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList">Resiliencehubv2PolicyAvailabilitySloList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery">data_recovery</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList">Resiliencehubv2PolicyDataRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz">multi_az</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList">Resiliencehubv2PolicyMultiAzList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion">multi_region</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList">Resiliencehubv2PolicyMultiRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput">availability_slo_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput">data_recovery_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput">multi_az_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput">multi_region_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_slo`<sup>Required</sup> <a name="availability_slo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo"></a>

```python
availability_slo: Resiliencehubv2PolicyAvailabilitySloList
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList">Resiliencehubv2PolicyAvailabilitySloList</a>

---

##### `data_recovery`<sup>Required</sup> <a name="data_recovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery"></a>

```python
data_recovery: Resiliencehubv2PolicyDataRecoveryList
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList">Resiliencehubv2PolicyDataRecoveryList</a>

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz"></a>

```python
multi_az: Resiliencehubv2PolicyMultiAzList
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList">Resiliencehubv2PolicyMultiAzList</a>

---

##### `multi_region`<sup>Required</sup> <a name="multi_region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion"></a>

```python
multi_region: Resiliencehubv2PolicyMultiRegionList
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList">Resiliencehubv2PolicyMultiRegionList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `availability_slo_input`<sup>Optional</sup> <a name="availability_slo_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput"></a>

```python
availability_slo_input: IResolvable | typing.List[Resiliencehubv2PolicyAvailabilitySlo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>]

---

##### `data_recovery_input`<sup>Optional</sup> <a name="data_recovery_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput"></a>

```python
data_recovery_input: IResolvable | typing.List[Resiliencehubv2PolicyDataRecovery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput"></a>

```python
multi_az_input: IResolvable | typing.List[Resiliencehubv2PolicyMultiAz]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>]

---

##### `multi_region_input`<sup>Optional</sup> <a name="multi_region_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput"></a>

```python
multi_region_input: IResolvable | typing.List[Resiliencehubv2PolicyMultiRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2PolicyAvailabilitySlo <a name="Resiliencehubv2PolicyAvailabilitySlo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo(
  target: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target">target</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#target Resiliencehubv2Policy#target}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#target Resiliencehubv2Policy#target}.

---

### Resiliencehubv2PolicyConfig <a name="Resiliencehubv2PolicyConfig" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  availability_slo: IResolvable | typing.List[Resiliencehubv2PolicyAvailabilitySlo] = None,
  data_recovery: IResolvable | typing.List[Resiliencehubv2PolicyDataRecovery] = None,
  description: str = None,
  kms_key_id: str = None,
  multi_az: IResolvable | typing.List[Resiliencehubv2PolicyMultiAz] = None,
  multi_region: IResolvable | typing.List[Resiliencehubv2PolicyMultiRegion] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo">availability_slo</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>]</code> | availability_slo block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery">data_recovery</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>]</code> | data_recovery block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz">multi_az</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>]</code> | multi_az block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion">multi_region</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>]</code> | multi_region block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}.

---

##### `availability_slo`<sup>Optional</sup> <a name="availability_slo" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo"></a>

```python
availability_slo: IResolvable | typing.List[Resiliencehubv2PolicyAvailabilitySlo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>]

availability_slo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}

---

##### `data_recovery`<sup>Optional</sup> <a name="data_recovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery"></a>

```python
data_recovery: IResolvable | typing.List[Resiliencehubv2PolicyDataRecovery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>]

data_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}.

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz"></a>

```python
multi_az: IResolvable | typing.List[Resiliencehubv2PolicyMultiAz]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>]

multi_az block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}

---

##### `multi_region`<sup>Optional</sup> <a name="multi_region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion"></a>

```python
multi_region: IResolvable | typing.List[Resiliencehubv2PolicyMultiRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>]

multi_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#region Resiliencehubv2Policy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}.

---

### Resiliencehubv2PolicyDataRecovery <a name="Resiliencehubv2PolicyDataRecovery" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery(
  time_between_backups_in_minutes: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes">time_between_backups_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#time_between_backups_in_minutes Resiliencehubv2Policy#time_between_backups_in_minutes}. |

---

##### `time_between_backups_in_minutes`<sup>Required</sup> <a name="time_between_backups_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes"></a>

```python
time_between_backups_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#time_between_backups_in_minutes Resiliencehubv2Policy#time_between_backups_in_minutes}.

---

### Resiliencehubv2PolicyMultiAz <a name="Resiliencehubv2PolicyMultiAz" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz(
  disaster_recovery_approach: str,
  rpo_in_minutes: typing.Union[int, float] = None,
  rto_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach">disaster_recovery_approach</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes">rpo_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes">rto_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}. |

---

##### `disaster_recovery_approach`<sup>Required</sup> <a name="disaster_recovery_approach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach"></a>

```python
disaster_recovery_approach: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}.

---

##### `rpo_in_minutes`<sup>Optional</sup> <a name="rpo_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes"></a>

```python
rpo_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}.

---

##### `rto_in_minutes`<sup>Optional</sup> <a name="rto_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes"></a>

```python
rto_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}.

---

### Resiliencehubv2PolicyMultiRegion <a name="Resiliencehubv2PolicyMultiRegion" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion(
  disaster_recovery_approach: str,
  rpo_in_minutes: typing.Union[int, float] = None,
  rto_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach">disaster_recovery_approach</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes">rpo_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes">rto_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}. |

---

##### `disaster_recovery_approach`<sup>Required</sup> <a name="disaster_recovery_approach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach"></a>

```python
disaster_recovery_approach: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}.

---

##### `rpo_in_minutes`<sup>Optional</sup> <a name="rpo_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes"></a>

```python
rpo_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}.

---

##### `rto_in_minutes`<sup>Optional</sup> <a name="rto_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes"></a>

```python
rto_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2PolicyAvailabilitySloList <a name="Resiliencehubv2PolicyAvailabilitySloList" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2PolicyAvailabilitySloOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2PolicyAvailabilitySlo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>]

---


### Resiliencehubv2PolicyAvailabilitySloOutputReference <a name="Resiliencehubv2PolicyAvailabilitySloOutputReference" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2PolicyAvailabilitySlo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

---


### Resiliencehubv2PolicyDataRecoveryList <a name="Resiliencehubv2PolicyDataRecoveryList" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2PolicyDataRecoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2PolicyDataRecovery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>]

---


### Resiliencehubv2PolicyDataRecoveryOutputReference <a name="Resiliencehubv2PolicyDataRecoveryOutputReference" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput">time_between_backups_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes">time_between_backups_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_between_backups_in_minutes_input`<sup>Optional</sup> <a name="time_between_backups_in_minutes_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput"></a>

```python
time_between_backups_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_between_backups_in_minutes`<sup>Required</sup> <a name="time_between_backups_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes"></a>

```python
time_between_backups_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2PolicyDataRecovery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

---


### Resiliencehubv2PolicyMultiAzList <a name="Resiliencehubv2PolicyMultiAzList" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2PolicyMultiAzOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2PolicyMultiAz]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>]

---


### Resiliencehubv2PolicyMultiAzOutputReference <a name="Resiliencehubv2PolicyMultiAzOutputReference" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes">reset_rpo_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes">reset_rto_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rpo_in_minutes` <a name="reset_rpo_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes"></a>

```python
def reset_rpo_in_minutes() -> None
```

##### `reset_rto_in_minutes` <a name="reset_rto_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes"></a>

```python
def reset_rto_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput">disaster_recovery_approach_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput">rpo_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput">rto_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach">disaster_recovery_approach</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes">rpo_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes">rto_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disaster_recovery_approach_input`<sup>Optional</sup> <a name="disaster_recovery_approach_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput"></a>

```python
disaster_recovery_approach_input: str
```

- *Type:* str

---

##### `rpo_in_minutes_input`<sup>Optional</sup> <a name="rpo_in_minutes_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput"></a>

```python
rpo_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_minutes_input`<sup>Optional</sup> <a name="rto_in_minutes_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput"></a>

```python
rto_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disaster_recovery_approach`<sup>Required</sup> <a name="disaster_recovery_approach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach"></a>

```python
disaster_recovery_approach: str
```

- *Type:* str

---

##### `rpo_in_minutes`<sup>Required</sup> <a name="rpo_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes"></a>

```python
rpo_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_minutes`<sup>Required</sup> <a name="rto_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes"></a>

```python
rto_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2PolicyMultiAz
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

---


### Resiliencehubv2PolicyMultiRegionList <a name="Resiliencehubv2PolicyMultiRegionList" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2PolicyMultiRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2PolicyMultiRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>]

---


### Resiliencehubv2PolicyMultiRegionOutputReference <a name="Resiliencehubv2PolicyMultiRegionOutputReference" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import resiliencehubv2_policy

resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes">reset_rpo_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes">reset_rto_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rpo_in_minutes` <a name="reset_rpo_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes"></a>

```python
def reset_rpo_in_minutes() -> None
```

##### `reset_rto_in_minutes` <a name="reset_rto_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes"></a>

```python
def reset_rto_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput">disaster_recovery_approach_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput">rpo_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput">rto_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach">disaster_recovery_approach</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes">rpo_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes">rto_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disaster_recovery_approach_input`<sup>Optional</sup> <a name="disaster_recovery_approach_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput"></a>

```python
disaster_recovery_approach_input: str
```

- *Type:* str

---

##### `rpo_in_minutes_input`<sup>Optional</sup> <a name="rpo_in_minutes_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput"></a>

```python
rpo_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_minutes_input`<sup>Optional</sup> <a name="rto_in_minutes_input" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput"></a>

```python
rto_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disaster_recovery_approach`<sup>Required</sup> <a name="disaster_recovery_approach" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach"></a>

```python
disaster_recovery_approach: str
```

- *Type:* str

---

##### `rpo_in_minutes`<sup>Required</sup> <a name="rpo_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes"></a>

```python
rpo_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_minutes`<sup>Required</sup> <a name="rto_in_minutes" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes"></a>

```python
rto_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2PolicyMultiRegion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

---



