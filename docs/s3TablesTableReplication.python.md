# `s3TablesTableReplication` Submodule <a name="`s3TablesTableReplication` Submodule" id="@cdktf/provider-aws.s3TablesTableReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTableReplication <a name="S3TablesTableReplication" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication aws_s3tables_table_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role: str,
  table_arn: str,
  region: str = None,
  rule: IResolvable | typing.List[S3TablesTableReplicationRule] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#role S3TablesTableReplication#role}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.tableArn">table_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#table_arn S3TablesTableReplication#table_arn}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.rule">rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>]</code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#role S3TablesTableReplication#role}.

---

##### `table_arn`<sup>Required</sup> <a name="table_arn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.tableArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#table_arn S3TablesTableReplication#table_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#region S3TablesTableReplication#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.Initializer.parameter.rule"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#rule S3TablesTableReplication#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.resetRule">reset_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[S3TablesTableReplicationRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>]

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.resetRule"></a>

```python
def reset_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3TablesTableReplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3TablesTableReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3TablesTableReplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3TablesTableReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3TablesTableReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList">S3TablesTableReplicationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.versionToken">version_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.ruleInput">rule_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.tableArnInput">table_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.tableArn">table_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.rule"></a>

```python
rule: S3TablesTableReplicationRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList">S3TablesTableReplicationRuleList</a>

---

##### `version_token`<sup>Required</sup> <a name="version_token" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.versionToken"></a>

```python
version_token: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[S3TablesTableReplicationRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>]

---

##### `table_arn_input`<sup>Optional</sup> <a name="table_arn_input" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.tableArnInput"></a>

```python
table_arn_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `table_arn`<sup>Required</sup> <a name="table_arn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.tableArn"></a>

```python
table_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableReplicationConfig <a name="S3TablesTableReplicationConfig" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role: str,
  table_arn: str,
  region: str = None,
  rule: IResolvable | typing.List[S3TablesTableReplicationRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#role S3TablesTableReplication#role}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.tableArn">table_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#table_arn S3TablesTableReplication#table_arn}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#role S3TablesTableReplication#role}.

---

##### `table_arn`<sup>Required</sup> <a name="table_arn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.tableArn"></a>

```python
table_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#table_arn S3TablesTableReplication#table_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#region S3TablesTableReplication#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationConfig.property.rule"></a>

```python
rule: IResolvable | typing.List[S3TablesTableReplicationRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#rule S3TablesTableReplication#rule}

---

### S3TablesTableReplicationRule <a name="S3TablesTableReplicationRule" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplicationRule(
  destination: IResolvable | typing.List[S3TablesTableReplicationRuleDestination] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule.property.destination">destination</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination">S3TablesTableReplicationRuleDestination</a>]</code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule.property.destination"></a>

```python
destination: IResolvable | typing.List[S3TablesTableReplicationRuleDestination]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination">S3TablesTableReplicationRuleDestination</a>]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#destination S3TablesTableReplication#destination}

---

### S3TablesTableReplicationRuleDestination <a name="S3TablesTableReplicationRuleDestination" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplicationRuleDestination(
  destination_table_bucket_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination.property.destinationTableBucketArn">destination_table_bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#destination_table_bucket_arn S3TablesTableReplication#destination_table_bucket_arn}. |

---

##### `destination_table_bucket_arn`<sup>Required</sup> <a name="destination_table_bucket_arn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination.property.destinationTableBucketArn"></a>

```python
destination_table_bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/s3tables_table_replication#destination_table_bucket_arn S3TablesTableReplication#destination_table_bucket_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableReplicationRuleDestinationList <a name="S3TablesTableReplicationRuleDestinationList" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableReplicationRuleDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination">S3TablesTableReplicationRuleDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableReplicationRuleDestination]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination">S3TablesTableReplicationRuleDestination</a>]

---


### S3TablesTableReplicationRuleDestinationOutputReference <a name="S3TablesTableReplicationRuleDestinationOutputReference" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.destinationTableBucketArnInput">destination_table_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.destinationTableBucketArn">destination_table_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination">S3TablesTableReplicationRuleDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_table_bucket_arn_input`<sup>Optional</sup> <a name="destination_table_bucket_arn_input" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.destinationTableBucketArnInput"></a>

```python
destination_table_bucket_arn_input: str
```

- *Type:* str

---

##### `destination_table_bucket_arn`<sup>Required</sup> <a name="destination_table_bucket_arn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.destinationTableBucketArn"></a>

```python
destination_table_bucket_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableReplicationRuleDestination
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination">S3TablesTableReplicationRuleDestination</a>

---


### S3TablesTableReplicationRuleList <a name="S3TablesTableReplicationRuleList" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplicationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableReplicationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableReplicationRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>]

---


### S3TablesTableReplicationRuleOutputReference <a name="S3TablesTableReplicationRuleOutputReference" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table_replication

s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.putDestination"></a>

```python
def put_destination(
  value: IResolvable | typing.List[S3TablesTableReplicationRuleDestination]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination">S3TablesTableReplicationRuleDestination</a>]

---

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList">S3TablesTableReplicationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.destinationInput">destination_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination">S3TablesTableReplicationRuleDestination</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.destination"></a>

```python
destination: S3TablesTableReplicationRuleDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestinationList">S3TablesTableReplicationRuleDestinationList</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.destinationInput"></a>

```python
destination_input: IResolvable | typing.List[S3TablesTableReplicationRuleDestination]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleDestination">S3TablesTableReplicationRuleDestination</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableReplicationRule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3TablesTableReplication.S3TablesTableReplicationRule">S3TablesTableReplicationRule</a>

---



