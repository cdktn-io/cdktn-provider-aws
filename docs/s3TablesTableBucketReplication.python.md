# `s3TablesTableBucketReplication` Submodule <a name="`s3TablesTableBucketReplication` Submodule" id="@cdktn/provider-aws.s3TablesTableBucketReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTableBucketReplication <a name="S3TablesTableBucketReplication" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication aws_s3tables_table_bucket_replication}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplication(
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
  table_bucket_arn: str,
  region: str = None,
  rule: IResolvable | typing.List[S3TablesTableBucketReplicationRule] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.rule">rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>]</code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}.

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.tableBucketArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#region S3TablesTableBucketReplication#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.rule"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#rule S3TablesTableBucketReplication#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRule">reset_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[S3TablesTableBucketReplicationRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>]

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRule"></a>

```python
def reset_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3TablesTableBucketReplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3TablesTableBucketReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3TablesTableBucketReplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3TablesTableBucketReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3TablesTableBucketReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList">S3TablesTableBucketReplicationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.versionToken">version_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.ruleInput">rule_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArnInput">table_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.rule"></a>

```python
rule: S3TablesTableBucketReplicationRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList">S3TablesTableBucketReplicationRuleList</a>

---

##### `version_token`<sup>Required</sup> <a name="version_token" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.versionToken"></a>

```python
version_token: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[S3TablesTableBucketReplicationRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>]

---

##### `table_bucket_arn_input`<sup>Optional</sup> <a name="table_bucket_arn_input" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArnInput"></a>

```python
table_bucket_arn_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableBucketReplicationConfig <a name="S3TablesTableBucketReplicationConfig" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.Initializer"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role: str,
  table_bucket_arn: str,
  region: str = None,
  rule: IResolvable | typing.List[S3TablesTableBucketReplicationRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}.

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#region S3TablesTableBucketReplication#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.rule"></a>

```python
rule: IResolvable | typing.List[S3TablesTableBucketReplicationRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#rule S3TablesTableBucketReplication#rule}

---

### S3TablesTableBucketReplicationRule <a name="S3TablesTableBucketReplicationRule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule.Initializer"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule(
  destination: IResolvable | typing.List[S3TablesTableBucketReplicationRuleDestination] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule.property.destination">destination</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>]</code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule.property.destination"></a>

```python
destination: IResolvable | typing.List[S3TablesTableBucketReplicationRuleDestination]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#destination S3TablesTableBucketReplication#destination}

---

### S3TablesTableBucketReplicationRuleDestination <a name="S3TablesTableBucketReplicationRuleDestination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination.Initializer"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination(
  destination_table_bucket_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination.property.destinationTableBucketArn">destination_table_bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#destination_table_bucket_arn S3TablesTableBucketReplication#destination_table_bucket_arn}. |

---

##### `destination_table_bucket_arn`<sup>Required</sup> <a name="destination_table_bucket_arn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination.property.destinationTableBucketArn"></a>

```python
destination_table_bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#destination_table_bucket_arn S3TablesTableBucketReplication#destination_table_bucket_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableBucketReplicationRuleDestinationList <a name="S3TablesTableBucketReplicationRuleDestinationList" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableBucketReplicationRuleDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableBucketReplicationRuleDestination]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>]

---


### S3TablesTableBucketReplicationRuleDestinationOutputReference <a name="S3TablesTableBucketReplicationRuleDestinationOutputReference" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArnInput">destination_table_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArn">destination_table_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_table_bucket_arn_input`<sup>Optional</sup> <a name="destination_table_bucket_arn_input" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArnInput"></a>

```python
destination_table_bucket_arn_input: str
```

- *Type:* str

---

##### `destination_table_bucket_arn`<sup>Required</sup> <a name="destination_table_bucket_arn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArn"></a>

```python
destination_table_bucket_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketReplicationRuleDestination
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>

---


### S3TablesTableBucketReplicationRuleList <a name="S3TablesTableBucketReplicationRuleList" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3TablesTableBucketReplicationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3TablesTableBucketReplicationRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>]

---


### S3TablesTableBucketReplicationRuleOutputReference <a name="S3TablesTableBucketReplicationRuleOutputReference" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_tables_table_bucket_replication

s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.putDestination"></a>

```python
def put_destination(
  value: IResolvable | typing.List[S3TablesTableBucketReplicationRuleDestination]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>]

---

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList">S3TablesTableBucketReplicationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destinationInput">destination_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destination"></a>

```python
destination: S3TablesTableBucketReplicationRuleDestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList">S3TablesTableBucketReplicationRuleDestinationList</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destinationInput"></a>

```python
destination_input: IResolvable | typing.List[S3TablesTableBucketReplicationRuleDestination]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3TablesTableBucketReplicationRule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>

---



