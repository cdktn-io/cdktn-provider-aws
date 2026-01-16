# `elasticBeanstalkApplicationVersion` Submodule <a name="`elasticBeanstalkApplicationVersion` Submodule" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkApplicationVersion <a name="ElasticBeanstalkApplicationVersion" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version aws_elastic_beanstalk_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer"></a>

```python
from cdktn_provider_aws import elastic_beanstalk_application_version

elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application: str,
  bucket: str,
  key: str,
  name: str,
  description: str = None,
  force_delete: bool | IResolvable = None,
  id: str = None,
  process: bool | IResolvable = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.application">application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.forceDelete">force_delete</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.process">process</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#process ElasticBeanstalkApplicationVersion#process}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.application"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.forceDelete"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `process`<sup>Optional</sup> <a name="process" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.process"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#process ElasticBeanstalkApplicationVersion#process}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#region ElasticBeanstalkApplicationVersion#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetProcess">reset_process</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_process` <a name="reset_process" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetProcess"></a>

```python
def reset_process() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ElasticBeanstalkApplicationVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isConstruct"></a>

```python
from cdktn_provider_aws import elastic_beanstalk_application_version

elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformElement"></a>

```python
from cdktn_provider_aws import elastic_beanstalk_application_version

elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformResource"></a>

```python
from cdktn_provider_aws import elastic_beanstalk_application_version

elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport"></a>

```python
from cdktn_provider_aws import elastic_beanstalk_application_version

elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ElasticBeanstalkApplicationVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticBeanstalkApplicationVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticBeanstalkApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticBeanstalkApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.applicationInput">application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDeleteInput">force_delete_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.processInput">process_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDelete">force_delete</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.process">process</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `application_input`<sup>Optional</sup> <a name="application_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.applicationInput"></a>

```python
application_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDeleteInput"></a>

```python
force_delete_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `process_input`<sup>Optional</sup> <a name="process_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.processInput"></a>

```python
process_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDelete"></a>

```python
force_delete: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.process"></a>

```python
process: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkApplicationVersionConfig <a name="ElasticBeanstalkApplicationVersionConfig" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.Initializer"></a>

```python
from cdktn_provider_aws import elastic_beanstalk_application_version

elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application: str,
  bucket: str,
  key: str,
  name: str,
  description: str = None,
  force_delete: bool | IResolvable = None,
  id: str = None,
  process: bool | IResolvable = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.application">application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forceDelete">force_delete</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.process">process</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#process ElasticBeanstalkApplicationVersion#process}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}. |
| <code><a href="#@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.application"></a>

```python
application: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forceDelete"></a>

```python
force_delete: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `process`<sup>Optional</sup> <a name="process" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.process"></a>

```python
process: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#process ElasticBeanstalkApplicationVersion#process}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#region ElasticBeanstalkApplicationVersion#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}.

---



