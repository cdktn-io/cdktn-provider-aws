# `cloudfrontFunction` Submodule <a name="`cloudfrontFunction` Submodule" id="@cdktn/provider-aws.cloudfrontFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFunction <a name="CloudfrontFunction" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function aws_cloudfront_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_function

cloudfrontFunction.CloudfrontFunction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  code: str,
  name: str,
  runtime: str,
  comment: str = None,
  id: str = None,
  key_value_store_associations: typing.List[str] = None,
  publish: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#code CloudfrontFunction#code}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#name CloudfrontFunction#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#runtime CloudfrontFunction#runtime}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#comment CloudfrontFunction#comment}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#id CloudfrontFunction#id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.keyValueStoreAssociations">key_value_store_associations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#key_value_store_associations CloudfrontFunction#key_value_store_associations}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.publish">publish</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#publish CloudfrontFunction#publish}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#tags CloudfrontFunction#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#tags_all CloudfrontFunction#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.code"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#code CloudfrontFunction#code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#name CloudfrontFunction#name}.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.runtime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#runtime CloudfrontFunction#runtime}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#comment CloudfrontFunction#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#id CloudfrontFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_value_store_associations`<sup>Optional</sup> <a name="key_value_store_associations" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.keyValueStoreAssociations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#key_value_store_associations CloudfrontFunction#key_value_store_associations}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.publish"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#publish CloudfrontFunction#publish}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#tags CloudfrontFunction#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#tags_all CloudfrontFunction#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetKeyValueStoreAssociations">reset_key_value_store_associations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetPublish">reset_publish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_value_store_associations` <a name="reset_key_value_store_associations" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetKeyValueStoreAssociations"></a>

```python
def reset_key_value_store_associations() -> None
```

##### `reset_publish` <a name="reset_publish" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetPublish"></a>

```python
def reset_publish() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudfrontFunction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isConstruct"></a>

```python
from cdktn_provider_aws import cloudfront_function

cloudfrontFunction.CloudfrontFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformElement"></a>

```python
from cdktn_provider_aws import cloudfront_function

cloudfrontFunction.CloudfrontFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformResource"></a>

```python
from cdktn_provider_aws import cloudfront_function

cloudfrontFunction.CloudfrontFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport"></a>

```python
from cdktn_provider_aws import cloudfront_function

cloudfrontFunction.CloudfrontFunction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudfrontFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontFunction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.liveStageEtag">live_stage_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.keyValueStoreAssociationsInput">key_value_store_associations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.publishInput">publish_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.keyValueStoreAssociations">key_value_store_associations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.publish">publish</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `live_stage_etag`<sup>Required</sup> <a name="live_stage_etag" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.liveStageEtag"></a>

```python
live_stage_etag: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_value_store_associations_input`<sup>Optional</sup> <a name="key_value_store_associations_input" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.keyValueStoreAssociationsInput"></a>

```python
key_value_store_associations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `publish_input`<sup>Optional</sup> <a name="publish_input" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.publishInput"></a>

```python
publish_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_value_store_associations`<sup>Required</sup> <a name="key_value_store_associations" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.keyValueStoreAssociations"></a>

```python
key_value_store_associations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.publish"></a>

```python
publish: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFunctionConfig <a name="CloudfrontFunctionConfig" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.Initializer"></a>

```python
from cdktn_provider_aws import cloudfront_function

cloudfrontFunction.CloudfrontFunctionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  code: str,
  name: str,
  runtime: str,
  comment: str = None,
  id: str = None,
  key_value_store_associations: typing.List[str] = None,
  publish: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#code CloudfrontFunction#code}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#name CloudfrontFunction#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#runtime CloudfrontFunction#runtime}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#comment CloudfrontFunction#comment}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#id CloudfrontFunction#id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.keyValueStoreAssociations">key_value_store_associations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#key_value_store_associations CloudfrontFunction#key_value_store_associations}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.publish">publish</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#publish CloudfrontFunction#publish}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#tags CloudfrontFunction#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#tags_all CloudfrontFunction#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.code"></a>

```python
code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#code CloudfrontFunction#code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#name CloudfrontFunction#name}.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#runtime CloudfrontFunction#runtime}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#comment CloudfrontFunction#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#id CloudfrontFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_value_store_associations`<sup>Optional</sup> <a name="key_value_store_associations" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.keyValueStoreAssociations"></a>

```python
key_value_store_associations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#key_value_store_associations CloudfrontFunction#key_value_store_associations}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.publish"></a>

```python
publish: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#publish CloudfrontFunction#publish}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#tags CloudfrontFunction#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.cloudfrontFunction.CloudfrontFunctionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/cloudfront_function#tags_all CloudfrontFunction#tags_all}.

---



