# `s3VectorsVectorBucket` Submodule <a name="`s3VectorsVectorBucket` Submodule" id="@cdktn/provider-aws.s3VectorsVectorBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3VectorsVectorBucket <a name="S3VectorsVectorBucket" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket aws_s3vectors_vector_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer"></a>

```python
from cdktn_provider_aws import s3_vectors_vector_bucket

s3VectorsVectorBucket.S3VectorsVectorBucket(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vector_bucket_name: str,
  encryption_configuration: IResolvable | typing.List[S3VectorsVectorBucketEncryptionConfiguration] = None,
  force_destroy: bool | IResolvable = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.vectorBucketName">vector_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#vector_bucket_name S3VectorsVectorBucket#vector_bucket_name}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#encryption_configuration S3VectorsVectorBucket#encryption_configuration}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#force_destroy S3VectorsVectorBucket#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#tags S3VectorsVectorBucket#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `vector_bucket_name`<sup>Required</sup> <a name="vector_bucket_name" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.vectorBucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#vector_bucket_name S3VectorsVectorBucket#vector_bucket_name}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#encryption_configuration S3VectorsVectorBucket#encryption_configuration}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.forceDestroy"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#force_destroy S3VectorsVectorBucket#force_destroy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#region S3VectorsVectorBucket#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#tags S3VectorsVectorBucket#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  value: IResolvable | typing.List[S3VectorsVectorBucketEncryptionConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.putEncryptionConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>]

---

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3VectorsVectorBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isConstruct"></a>

```python
from cdktn_provider_aws import s3_vectors_vector_bucket

s3VectorsVectorBucket.S3VectorsVectorBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformElement"></a>

```python
from cdktn_provider_aws import s3_vectors_vector_bucket

s3VectorsVectorBucket.S3VectorsVectorBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformResource"></a>

```python
from cdktn_provider_aws import s3_vectors_vector_bucket

s3VectorsVectorBucket.S3VectorsVectorBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport"></a>

```python
from cdktn_provider_aws import s3_vectors_vector_bucket

s3VectorsVectorBucket.S3VectorsVectorBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3VectorsVectorBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3VectorsVectorBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3VectorsVectorBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3VectorsVectorBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList">S3VectorsVectorBucketEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketArn">vector_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forceDestroyInput">force_destroy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketNameInput">vector_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketName">vector_bucket_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.encryptionConfiguration"></a>

```python
encryption_configuration: S3VectorsVectorBucketEncryptionConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList">S3VectorsVectorBucketEncryptionConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `vector_bucket_arn`<sup>Required</sup> <a name="vector_bucket_arn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketArn"></a>

```python
vector_bucket_arn: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | typing.List[S3VectorsVectorBucketEncryptionConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>]

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forceDestroyInput"></a>

```python
force_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vector_bucket_name_input`<sup>Optional</sup> <a name="vector_bucket_name_input" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketNameInput"></a>

```python
vector_bucket_name_input: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vector_bucket_name`<sup>Required</sup> <a name="vector_bucket_name" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.vectorBucketName"></a>

```python
vector_bucket_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3VectorsVectorBucketConfig <a name="S3VectorsVectorBucketConfig" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.Initializer"></a>

```python
from cdktn_provider_aws import s3_vectors_vector_bucket

s3VectorsVectorBucket.S3VectorsVectorBucketConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vector_bucket_name: str,
  encryption_configuration: IResolvable | typing.List[S3VectorsVectorBucketEncryptionConfiguration] = None,
  force_destroy: bool | IResolvable = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.vectorBucketName">vector_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#vector_bucket_name S3VectorsVectorBucket#vector_bucket_name}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#encryption_configuration S3VectorsVectorBucket#encryption_configuration}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#force_destroy S3VectorsVectorBucket#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#tags S3VectorsVectorBucket#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `vector_bucket_name`<sup>Required</sup> <a name="vector_bucket_name" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.vectorBucketName"></a>

```python
vector_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#vector_bucket_name S3VectorsVectorBucket#vector_bucket_name}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: IResolvable | typing.List[S3VectorsVectorBucketEncryptionConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#encryption_configuration S3VectorsVectorBucket#encryption_configuration}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#force_destroy S3VectorsVectorBucket#force_destroy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#region S3VectorsVectorBucket#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#tags S3VectorsVectorBucket#tags}.

---

### S3VectorsVectorBucketEncryptionConfiguration <a name="S3VectorsVectorBucketEncryptionConfiguration" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import s3_vectors_vector_bucket

s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration(
  kms_key_arn: str = None,
  sse_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#kms_key_arn S3VectorsVectorBucket#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.property.sseType">sse_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#sse_type S3VectorsVectorBucket#sse_type}. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#kms_key_arn S3VectorsVectorBucket#kms_key_arn}.

---

##### `sse_type`<sup>Optional</sup> <a name="sse_type" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration.property.sseType"></a>

```python
sse_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket#sse_type S3VectorsVectorBucket#sse_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3VectorsVectorBucketEncryptionConfigurationList <a name="S3VectorsVectorBucketEncryptionConfigurationList" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer"></a>

```python
from cdktn_provider_aws import s3_vectors_vector_bucket

s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3VectorsVectorBucketEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3VectorsVectorBucketEncryptionConfiguration]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>]

---


### S3VectorsVectorBucketEncryptionConfigurationOutputReference <a name="S3VectorsVectorBucketEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import s3_vectors_vector_bucket

s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resetSseType">reset_sse_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_sse_type` <a name="reset_sse_type" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.resetSseType"></a>

```python
def reset_sse_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseTypeInput">sse_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseType">sse_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `sse_type_input`<sup>Optional</sup> <a name="sse_type_input" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseTypeInput"></a>

```python
sse_type_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `sse_type`<sup>Required</sup> <a name="sse_type" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.sseType"></a>

```python
sse_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3VectorsVectorBucketEncryptionConfiguration
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3VectorsVectorBucket.S3VectorsVectorBucketEncryptionConfiguration">S3VectorsVectorBucketEncryptionConfiguration</a>

---



