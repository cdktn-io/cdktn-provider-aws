# `xrayIndexingRule` Submodule <a name="`xrayIndexingRule` Submodule" id="@cdktn/provider-aws.xrayIndexingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XrayIndexingRule <a name="XrayIndexingRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule aws_xray_indexing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRule(
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
  region: str = None,
  rule: IResolvable | typing.List[XrayIndexingRuleRule] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>]</code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#region XrayIndexingRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.Initializer.parameter.rule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#rule XrayIndexingRule#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRule">reset_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[XrayIndexingRuleRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>]

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.resetRule"></a>

```python
def reset_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a XrayIndexingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isConstruct"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformElement"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformResource"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a XrayIndexingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the XrayIndexingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing XrayIndexingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the XrayIndexingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList">XrayIndexingRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.rule"></a>

```python
rule: XrayIndexingRuleRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList">XrayIndexingRuleRuleList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[XrayIndexingRuleRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### XrayIndexingRuleConfig <a name="XrayIndexingRuleConfig" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.Initializer"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  region: str = None,
  rule: IResolvable | typing.List[XrayIndexingRuleRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#name XrayIndexingRule#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#region XrayIndexingRule#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleConfig.property.rule"></a>

```python
rule: IResolvable | typing.List[XrayIndexingRuleRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#rule XrayIndexingRule#rule}

---

### XrayIndexingRuleRule <a name="XrayIndexingRuleRule" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule.Initializer"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRuleRule(
  probabilistic: IResolvable | typing.List[XrayIndexingRuleRuleProbabilistic] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule.property.probabilistic">probabilistic</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>]</code> | probabilistic block. |

---

##### `probabilistic`<sup>Optional</sup> <a name="probabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule.property.probabilistic"></a>

```python
probabilistic: IResolvable | typing.List[XrayIndexingRuleRuleProbabilistic]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>]

probabilistic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#probabilistic XrayIndexingRule#probabilistic}

---

### XrayIndexingRuleRuleProbabilistic <a name="XrayIndexingRuleRuleProbabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic.Initializer"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRuleRuleProbabilistic(
  desired_sampling_percentage: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic.property.desiredSamplingPercentage">desired_sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#desired_sampling_percentage XrayIndexingRule#desired_sampling_percentage}. |

---

##### `desired_sampling_percentage`<sup>Required</sup> <a name="desired_sampling_percentage" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic.property.desiredSamplingPercentage"></a>

```python
desired_sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/xray_indexing_rule#desired_sampling_percentage XrayIndexingRule#desired_sampling_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### XrayIndexingRuleRuleList <a name="XrayIndexingRuleRuleList" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRuleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> XrayIndexingRuleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[XrayIndexingRuleRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>]

---


### XrayIndexingRuleRuleOutputReference <a name="XrayIndexingRuleRuleOutputReference" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.putProbabilistic">put_probabilistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resetProbabilistic">reset_probabilistic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_probabilistic` <a name="put_probabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.putProbabilistic"></a>

```python
def put_probabilistic(
  value: IResolvable | typing.List[XrayIndexingRuleRuleProbabilistic]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.putProbabilistic.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>]

---

##### `reset_probabilistic` <a name="reset_probabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.resetProbabilistic"></a>

```python
def reset_probabilistic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilistic">probabilistic</a></code> | <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList">XrayIndexingRuleRuleProbabilisticList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilisticInput">probabilistic_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `probabilistic`<sup>Required</sup> <a name="probabilistic" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilistic"></a>

```python
probabilistic: XrayIndexingRuleRuleProbabilisticList
```

- *Type:* <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList">XrayIndexingRuleRuleProbabilisticList</a>

---

##### `probabilistic_input`<sup>Optional</sup> <a name="probabilistic_input" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.probabilisticInput"></a>

```python
probabilistic_input: IResolvable | typing.List[XrayIndexingRuleRuleProbabilistic]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XrayIndexingRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRule">XrayIndexingRuleRule</a>

---


### XrayIndexingRuleRuleProbabilisticList <a name="XrayIndexingRuleRuleProbabilisticList" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> XrayIndexingRuleRuleProbabilisticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[XrayIndexingRuleRuleProbabilistic]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>]

---


### XrayIndexingRuleRuleProbabilisticOutputReference <a name="XrayIndexingRuleRuleProbabilisticOutputReference" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import xray_indexing_rule

xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.actualSamplingPercentage">actual_sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentageInput">desired_sampling_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentage">desired_sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actual_sampling_percentage`<sup>Required</sup> <a name="actual_sampling_percentage" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.actualSamplingPercentage"></a>

```python
actual_sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_sampling_percentage_input`<sup>Optional</sup> <a name="desired_sampling_percentage_input" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentageInput"></a>

```python
desired_sampling_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_sampling_percentage`<sup>Required</sup> <a name="desired_sampling_percentage" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.desiredSamplingPercentage"></a>

```python
desired_sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilisticOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | XrayIndexingRuleRuleProbabilistic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayIndexingRule.XrayIndexingRuleRuleProbabilistic">XrayIndexingRuleRuleProbabilistic</a>

---



