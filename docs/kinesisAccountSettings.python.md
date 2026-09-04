# `kinesisAccountSettings` Submodule <a name="`kinesisAccountSettings` Submodule" id="@cdktn/provider-aws.kinesisAccountSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisAccountSettings <a name="KinesisAccountSettings" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/kinesis_account_settings aws_kinesis_account_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer"></a>

```python
from cdktn_provider_aws import kinesis_account_settings

kinesisAccountSettings.KinesisAccountSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  minimum_throughput_billing_commitment: IResolvable | typing.List[KinesisAccountSettingsMinimumThroughputBillingCommitment] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.minimumThroughputBillingCommitment">minimum_throughput_billing_commitment</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>]</code> | minimum_throughput_billing_commitment block. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `minimum_throughput_billing_commitment`<sup>Optional</sup> <a name="minimum_throughput_billing_commitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.minimumThroughputBillingCommitment"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>]

minimum_throughput_billing_commitment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/kinesis_account_settings#minimum_throughput_billing_commitment KinesisAccountSettings#minimum_throughput_billing_commitment}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/kinesis_account_settings#region KinesisAccountSettings#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment">put_minimum_throughput_billing_commitment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetMinimumThroughputBillingCommitment">reset_minimum_throughput_billing_commitment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_minimum_throughput_billing_commitment` <a name="put_minimum_throughput_billing_commitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment"></a>

```python
def put_minimum_throughput_billing_commitment(
  value: IResolvable | typing.List[KinesisAccountSettingsMinimumThroughputBillingCommitment]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>]

---

##### `reset_minimum_throughput_billing_commitment` <a name="reset_minimum_throughput_billing_commitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetMinimumThroughputBillingCommitment"></a>

```python
def reset_minimum_throughput_billing_commitment() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KinesisAccountSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct"></a>

```python
from cdktn_provider_aws import kinesis_account_settings

kinesisAccountSettings.KinesisAccountSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement"></a>

```python
from cdktn_provider_aws import kinesis_account_settings

kinesisAccountSettings.KinesisAccountSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource"></a>

```python
from cdktn_provider_aws import kinesis_account_settings

kinesisAccountSettings.KinesisAccountSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport"></a>

```python
from cdktn_provider_aws import kinesis_account_settings

kinesisAccountSettings.KinesisAccountSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KinesisAccountSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KinesisAccountSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KinesisAccountSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/kinesis_account_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KinesisAccountSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitment">minimum_throughput_billing_commitment</a></code> | <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList">KinesisAccountSettingsMinimumThroughputBillingCommitmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitmentInput">minimum_throughput_billing_commitment_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `minimum_throughput_billing_commitment`<sup>Required</sup> <a name="minimum_throughput_billing_commitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitment"></a>

```python
minimum_throughput_billing_commitment: KinesisAccountSettingsMinimumThroughputBillingCommitmentList
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList">KinesisAccountSettingsMinimumThroughputBillingCommitmentList</a>

---

##### `minimum_throughput_billing_commitment_input`<sup>Optional</sup> <a name="minimum_throughput_billing_commitment_input" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitmentInput"></a>

```python
minimum_throughput_billing_commitment_input: IResolvable | typing.List[KinesisAccountSettingsMinimumThroughputBillingCommitment]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisAccountSettingsConfig <a name="KinesisAccountSettingsConfig" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.Initializer"></a>

```python
from cdktn_provider_aws import kinesis_account_settings

kinesisAccountSettings.KinesisAccountSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  minimum_throughput_billing_commitment: IResolvable | typing.List[KinesisAccountSettingsMinimumThroughputBillingCommitment] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.minimumThroughputBillingCommitment">minimum_throughput_billing_commitment</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>]</code> | minimum_throughput_billing_commitment block. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `minimum_throughput_billing_commitment`<sup>Optional</sup> <a name="minimum_throughput_billing_commitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.minimumThroughputBillingCommitment"></a>

```python
minimum_throughput_billing_commitment: IResolvable | typing.List[KinesisAccountSettingsMinimumThroughputBillingCommitment]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>]

minimum_throughput_billing_commitment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/kinesis_account_settings#minimum_throughput_billing_commitment KinesisAccountSettings#minimum_throughput_billing_commitment}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/kinesis_account_settings#region KinesisAccountSettings#region}

---

### KinesisAccountSettingsMinimumThroughputBillingCommitment <a name="KinesisAccountSettingsMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.Initializer"></a>

```python
from cdktn_provider_aws import kinesis_account_settings

kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment(
  status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/kinesis_account_settings#status KinesisAccountSettings#status}. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/kinesis_account_settings#status KinesisAccountSettings#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisAccountSettingsMinimumThroughputBillingCommitmentList <a name="KinesisAccountSettingsMinimumThroughputBillingCommitmentList" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer"></a>

```python
from cdktn_provider_aws import kinesis_account_settings

kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KinesisAccountSettingsMinimumThroughputBillingCommitment]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>]

---


### KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference <a name="KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import kinesis_account_settings

kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.earliestAllowedEndAt">earliest_allowed_end_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.endedAt">ended_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.startedAt">started_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusActual">status_actual</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `earliest_allowed_end_at`<sup>Required</sup> <a name="earliest_allowed_end_at" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.earliestAllowedEndAt"></a>

```python
earliest_allowed_end_at: str
```

- *Type:* str

---

##### `ended_at`<sup>Required</sup> <a name="ended_at" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.endedAt"></a>

```python
ended_at: str
```

- *Type:* str

---

##### `started_at`<sup>Required</sup> <a name="started_at" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.startedAt"></a>

```python
started_at: str
```

- *Type:* str

---

##### `status_actual`<sup>Required</sup> <a name="status_actual" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusActual"></a>

```python
status_actual: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KinesisAccountSettingsMinimumThroughputBillingCommitment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment">KinesisAccountSettingsMinimumThroughputBillingCommitment</a>

---



