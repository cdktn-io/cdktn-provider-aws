# `glueConnection` Submodule <a name="`glueConnection` Submodule" id="@cdktn/provider-aws.glueConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueConnection <a name="GlueConnection" id="@cdktn/provider-aws.glueConnection.GlueConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection aws_glue_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnection(
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
  athena_properties: typing.Mapping[str] = None,
  authentication_configuration: GlueConnectionAuthenticationConfiguration = None,
  catalog_id: str = None,
  connection_properties: typing.Mapping[str] = None,
  connection_type: str = None,
  description: str = None,
  id: str = None,
  match_criteria: typing.List[str] = None,
  physical_connection_requirements: GlueConnectionPhysicalConnectionRequirements = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#name GlueConnection#name}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.athenaProperties">athena_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connectionProperties">connection_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#description GlueConnection#description}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#id GlueConnection#id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.matchCriteria">match_criteria</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.physicalConnectionRequirements">physical_connection_requirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | physical_connection_requirements block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#tags GlueConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#name GlueConnection#name}.

---

##### `athena_properties`<sup>Optional</sup> <a name="athena_properties" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.athenaProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}.

---

##### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}.

---

##### `connection_properties`<sup>Optional</sup> <a name="connection_properties" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connectionProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.connectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#description GlueConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#id GlueConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match_criteria`<sup>Optional</sup> <a name="match_criteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.matchCriteria"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}.

---

##### `physical_connection_requirements`<sup>Optional</sup> <a name="physical_connection_requirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.physicalConnectionRequirements"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

physical_connection_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#region GlueConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#tags GlueConnection#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration">put_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements">put_physical_connection_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetAthenaProperties">reset_athena_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetAuthenticationConfiguration">reset_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionProperties">reset_connection_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetMatchCriteria">reset_match_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetPhysicalConnectionRequirements">reset_physical_connection_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueConnection.GlueConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.glueConnection.GlueConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.glueConnection.GlueConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.glueConnection.GlueConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.glueConnection.GlueConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.glueConnection.GlueConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.glueConnection.GlueConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication_configuration` <a name="put_authentication_configuration" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration"></a>

```python
def put_authentication_configuration(
  authentication_type: str,
  basic_authentication_credentials: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials = None,
  custom_authentication_credentials: typing.Mapping[str] = None,
  kms_key_arn: str = None,
  oauth2_properties: GlueConnectionAuthenticationConfigurationOauth2Properties = None,
  secret_arn: str = None
) -> None
```

###### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}.

---

###### `basic_authentication_credentials`<sup>Optional</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration.parameter.basicAuthenticationCredentials"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

basic_authentication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}

---

###### `custom_authentication_credentials`<sup>Optional</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration.parameter.customAuthenticationCredentials"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}.

---

###### `oauth2_properties`<sup>Optional</sup> <a name="oauth2_properties" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration.parameter.oauth2Properties"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

oauth2_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#oauth2_properties GlueConnection#oauth2_properties}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration.parameter.secretArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}.

---

##### `put_physical_connection_requirements` <a name="put_physical_connection_requirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements"></a>

```python
def put_physical_connection_requirements(
  availability_zone: str = None,
  security_group_id_list: typing.List[str] = None,
  subnet_id: str = None
) -> None
```

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}.

---

###### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements.parameter.securityGroupIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}.

---

##### `reset_athena_properties` <a name="reset_athena_properties" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetAthenaProperties"></a>

```python
def reset_athena_properties() -> None
```

##### `reset_authentication_configuration` <a name="reset_authentication_configuration" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetAuthenticationConfiguration"></a>

```python
def reset_authentication_configuration() -> None
```

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_connection_properties` <a name="reset_connection_properties" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionProperties"></a>

```python
def reset_connection_properties() -> None
```

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_match_criteria` <a name="reset_match_criteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetMatchCriteria"></a>

```python
def reset_match_criteria() -> None
```

##### `reset_physical_connection_requirements` <a name="reset_physical_connection_requirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetPhysicalConnectionRequirements"></a>

```python
def reset_physical_connection_requirements() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference">GlueConnectionAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirements">physical_connection_requirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference">GlueConnectionPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaPropertiesInput">athena_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfigurationInput">authentication_configuration_input</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionPropertiesInput">connection_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteriaInput">match_criteria_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirementsInput">physical_connection_requirements_input</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaProperties">athena_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionProperties">connection_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteria">match_criteria</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfiguration"></a>

```python
authentication_configuration: GlueConnectionAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference">GlueConnectionAuthenticationConfigurationOutputReference</a>

---

##### `physical_connection_requirements`<sup>Required</sup> <a name="physical_connection_requirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirements"></a>

```python
physical_connection_requirements: GlueConnectionPhysicalConnectionRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference">GlueConnectionPhysicalConnectionRequirementsOutputReference</a>

---

##### `athena_properties_input`<sup>Optional</sup> <a name="athena_properties_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaPropertiesInput"></a>

```python
athena_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authentication_configuration_input`<sup>Optional</sup> <a name="authentication_configuration_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfigurationInput"></a>

```python
authentication_configuration_input: GlueConnectionAuthenticationConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `connection_properties_input`<sup>Optional</sup> <a name="connection_properties_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionPropertiesInput"></a>

```python
connection_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_criteria_input`<sup>Optional</sup> <a name="match_criteria_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteriaInput"></a>

```python
match_criteria_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `physical_connection_requirements_input`<sup>Optional</sup> <a name="physical_connection_requirements_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirementsInput"></a>

```python
physical_connection_requirements_input: GlueConnectionPhysicalConnectionRequirements
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `athena_properties`<sup>Required</sup> <a name="athena_properties" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaProperties"></a>

```python
athena_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `connection_properties`<sup>Required</sup> <a name="connection_properties" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionProperties"></a>

```python
connection_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `match_criteria`<sup>Required</sup> <a name="match_criteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteria"></a>

```python
match_criteria: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueConnectionAuthenticationConfiguration <a name="GlueConnectionAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfiguration(
  authentication_type: str,
  basic_authentication_credentials: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials = None,
  custom_authentication_credentials: typing.Mapping[str] = None,
  kms_key_arn: str = None,
  oauth2_properties: GlueConnectionAuthenticationConfigurationOauth2Properties = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.basicAuthenticationCredentials">basic_authentication_credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | basic_authentication_credentials block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.customAuthenticationCredentials">custom_authentication_credentials</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.oauth2Properties">oauth2_properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | oauth2_properties block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}. |

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}.

---

##### `basic_authentication_credentials`<sup>Optional</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```python
basic_authentication_credentials: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

basic_authentication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}

---

##### `custom_authentication_credentials`<sup>Optional</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```python
custom_authentication_credentials: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}.

---

##### `oauth2_properties`<sup>Optional</sup> <a name="oauth2_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.oauth2Properties"></a>

```python
oauth2_properties: GlueConnectionAuthenticationConfigurationOauth2Properties
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

oauth2_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#oauth2_properties GlueConnection#oauth2_properties}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}.

---

### GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials <a name="GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#password GlueConnection#password}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#username GlueConnection#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#password GlueConnection#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#username GlueConnection#username}.

---

### GlueConnectionAuthenticationConfigurationOauth2Properties <a name="GlueConnectionAuthenticationConfigurationOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties(
  authorization_code_properties: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties = None,
  oauth2_client_application: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication = None,
  oauth2_credentials: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials = None,
  oauth2_grant_type: str = None,
  token_url: str = None,
  token_url_parameters_map: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.authorizationCodeProperties">authorization_code_properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | authorization_code_properties block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2ClientApplication">oauth2_client_application</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | oauth2_client_application block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2Credentials">oauth2_credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | oauth2_credentials block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2GrantType">oauth2_grant_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrl">token_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#token_url GlueConnection#token_url}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrlParametersMap">token_url_parameters_map</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}. |

---

##### `authorization_code_properties`<sup>Optional</sup> <a name="authorization_code_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.authorizationCodeProperties"></a>

```python
authorization_code_properties: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

authorization_code_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}

---

##### `oauth2_client_application`<sup>Optional</sup> <a name="oauth2_client_application" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2ClientApplication"></a>

```python
oauth2_client_application: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

oauth2_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#oauth2_client_application GlueConnection#oauth2_client_application}

---

##### `oauth2_credentials`<sup>Optional</sup> <a name="oauth2_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2Credentials"></a>

```python
oauth2_credentials: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

oauth2_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#oauth2_credentials GlueConnection#oauth2_credentials}

---

##### `oauth2_grant_type`<sup>Optional</sup> <a name="oauth2_grant_type" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2GrantType"></a>

```python
oauth2_grant_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}.

---

##### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#token_url GlueConnection#token_url}.

---

##### `token_url_parameters_map`<sup>Optional</sup> <a name="token_url_parameters_map" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrlParametersMap"></a>

```python
token_url_parameters_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties(
  authorization_code: str,
  redirect_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.authorizationCode">authorization_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.redirectUri">redirect_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}. |

---

##### `authorization_code`<sup>Required</sup> <a name="authorization_code" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```python
authorization_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}.

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication(
  aws_managed_client_application_reference: str = None,
  user_managed_client_application_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.awsManagedClientApplicationReference">aws_managed_client_application_reference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.userManagedClientApplicationClientId">user_managed_client_application_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}. |

---

##### `aws_managed_client_application_reference`<sup>Optional</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```python
aws_managed_client_application_reference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}.

---

##### `user_managed_client_application_client_id`<sup>Optional</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```python
user_managed_client_application_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials(
  access_token: str = None,
  jwt_token: str = None,
  refresh_token: str = None,
  user_managed_client_application_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#access_token GlueConnection#access_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.jwtToken">jwt_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.refreshToken">refresh_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.userManagedClientApplicationClientSecret">user_managed_client_application_client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#access_token GlueConnection#access_token}.

---

##### `jwt_token`<sup>Optional</sup> <a name="jwt_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.jwtToken"></a>

```python
jwt_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}.

---

##### `refresh_token`<sup>Optional</sup> <a name="refresh_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}.

---

##### `user_managed_client_application_client_secret`<sup>Optional</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```python
user_managed_client_application_client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}.

---

### GlueConnectionConfig <a name="GlueConnectionConfig" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  athena_properties: typing.Mapping[str] = None,
  authentication_configuration: GlueConnectionAuthenticationConfiguration = None,
  catalog_id: str = None,
  connection_properties: typing.Mapping[str] = None,
  connection_type: str = None,
  description: str = None,
  id: str = None,
  match_criteria: typing.List[str] = None,
  physical_connection_requirements: GlueConnectionPhysicalConnectionRequirements = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#name GlueConnection#name}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.athenaProperties">athena_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionProperties">connection_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#description GlueConnection#description}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#id GlueConnection#id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.matchCriteria">match_criteria</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.physicalConnectionRequirements">physical_connection_requirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | physical_connection_requirements block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#tags GlueConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#name GlueConnection#name}.

---

##### `athena_properties`<sup>Optional</sup> <a name="athena_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.athenaProperties"></a>

```python
athena_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}.

---

##### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.authenticationConfiguration"></a>

```python
authentication_configuration: GlueConnectionAuthenticationConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}.

---

##### `connection_properties`<sup>Optional</sup> <a name="connection_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionProperties"></a>

```python
connection_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#description GlueConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#id GlueConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match_criteria`<sup>Optional</sup> <a name="match_criteria" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.matchCriteria"></a>

```python
match_criteria: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}.

---

##### `physical_connection_requirements`<sup>Optional</sup> <a name="physical_connection_requirements" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.physicalConnectionRequirements"></a>

```python
physical_connection_requirements: GlueConnectionPhysicalConnectionRequirements
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

physical_connection_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#region GlueConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#tags GlueConnection#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}.

---

### GlueConnectionPhysicalConnectionRequirements <a name="GlueConnectionPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionPhysicalConnectionRequirements(
  availability_zone: str = None,
  security_group_id_list: typing.List[str] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}.

---

##### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">authorization_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorization_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_input`<sup>Optional</sup> <a name="authorization_code_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```python
authorization_code_input: str
```

- *Type:* str

---

##### `redirect_uri_input`<sup>Optional</sup> <a name="redirect_uri_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```python
redirect_uri_input: str
```

- *Type:* str

---

##### `authorization_code`<sup>Required</sup> <a name="authorization_code" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```python
authorization_code: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">reset_aws_managed_client_application_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">reset_user_managed_client_application_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_managed_client_application_reference` <a name="reset_aws_managed_client_application_reference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```python
def reset_aws_managed_client_application_reference() -> None
```

##### `reset_user_managed_client_application_client_id` <a name="reset_user_managed_client_application_client_id" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```python
def reset_user_managed_client_application_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">aws_managed_client_application_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">user_managed_client_application_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">aws_managed_client_application_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">user_managed_client_application_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_managed_client_application_reference_input`<sup>Optional</sup> <a name="aws_managed_client_application_reference_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```python
aws_managed_client_application_reference_input: str
```

- *Type:* str

---

##### `user_managed_client_application_client_id_input`<sup>Optional</sup> <a name="user_managed_client_application_client_id_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```python
user_managed_client_application_client_id_input: str
```

- *Type:* str

---

##### `aws_managed_client_application_reference`<sup>Required</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```python
aws_managed_client_application_reference: str
```

- *Type:* str

---

##### `user_managed_client_application_client_id`<sup>Required</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```python
user_managed_client_application_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue"></a>

```python
internal_value: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetJwtToken">reset_jwt_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetRefreshToken">reset_refresh_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">reset_user_managed_client_application_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token` <a name="reset_access_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_jwt_token` <a name="reset_jwt_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetJwtToken"></a>

```python
def reset_jwt_token() -> None
```

##### `reset_refresh_token` <a name="reset_refresh_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetRefreshToken"></a>

```python
def reset_refresh_token() -> None
```

##### `reset_user_managed_client_application_client_secret` <a name="reset_user_managed_client_application_client_secret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```python
def reset_user_managed_client_application_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtTokenInput">jwt_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshTokenInput">refresh_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">user_managed_client_application_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken">jwt_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken">refresh_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">user_managed_client_application_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `jwt_token_input`<sup>Optional</sup> <a name="jwt_token_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtTokenInput"></a>

```python
jwt_token_input: str
```

- *Type:* str

---

##### `refresh_token_input`<sup>Optional</sup> <a name="refresh_token_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshTokenInput"></a>

```python
refresh_token_input: str
```

- *Type:* str

---

##### `user_managed_client_application_client_secret_input`<sup>Optional</sup> <a name="user_managed_client_application_client_secret_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```python
user_managed_client_application_client_secret_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `jwt_token`<sup>Required</sup> <a name="jwt_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken"></a>

```python
jwt_token: str
```

- *Type:* str

---

##### `refresh_token`<sup>Required</sup> <a name="refresh_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

---

##### `user_managed_client_application_client_secret`<sup>Required</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```python
user_managed_client_application_client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties">put_authorization_code_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication">put_oauth2_client_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials">put_oauth2_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetAuthorizationCodeProperties">reset_authorization_code_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2ClientApplication">reset_oauth2_client_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2Credentials">reset_oauth2_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2GrantType">reset_oauth2_grant_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrl">reset_token_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrlParametersMap">reset_token_url_parameters_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_code_properties` <a name="put_authorization_code_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```python
def put_authorization_code_properties(
  authorization_code: str,
  redirect_uri: str
) -> None
```

###### `authorization_code`<sup>Required</sup> <a name="authorization_code" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.authorizationCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}.

---

###### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.redirectUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}.

---

##### `put_oauth2_client_application` <a name="put_oauth2_client_application" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication"></a>

```python
def put_oauth2_client_application(
  aws_managed_client_application_reference: str = None,
  user_managed_client_application_client_id: str = None
) -> None
```

###### `aws_managed_client_application_reference`<sup>Optional</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication.parameter.awsManagedClientApplicationReference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}.

---

###### `user_managed_client_application_client_id`<sup>Optional</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication.parameter.userManagedClientApplicationClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}.

---

##### `put_oauth2_credentials` <a name="put_oauth2_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials"></a>

```python
def put_oauth2_credentials(
  access_token: str = None,
  jwt_token: str = None,
  refresh_token: str = None,
  user_managed_client_application_client_secret: str = None
) -> None
```

###### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#access_token GlueConnection#access_token}.

---

###### `jwt_token`<sup>Optional</sup> <a name="jwt_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials.parameter.jwtToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}.

---

###### `refresh_token`<sup>Optional</sup> <a name="refresh_token" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials.parameter.refreshToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}.

---

###### `user_managed_client_application_client_secret`<sup>Optional</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials.parameter.userManagedClientApplicationClientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}.

---

##### `reset_authorization_code_properties` <a name="reset_authorization_code_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```python
def reset_authorization_code_properties() -> None
```

##### `reset_oauth2_client_application` <a name="reset_oauth2_client_application" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2ClientApplication"></a>

```python
def reset_oauth2_client_application() -> None
```

##### `reset_oauth2_credentials` <a name="reset_oauth2_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2Credentials"></a>

```python
def reset_oauth2_credentials() -> None
```

##### `reset_oauth2_grant_type` <a name="reset_oauth2_grant_type" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2GrantType"></a>

```python
def reset_oauth2_grant_type() -> None
```

##### `reset_token_url` <a name="reset_token_url" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrl"></a>

```python
def reset_token_url() -> None
```

##### `reset_token_url_parameters_map` <a name="reset_token_url_parameters_map" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```python
def reset_token_url_parameters_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties">authorization_code_properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication">oauth2_client_application</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials">oauth2_credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodePropertiesInput">authorization_code_properties_input</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplicationInput">oauth2_client_application_input</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2CredentialsInput">oauth2_credentials_input</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantTypeInput">oauth2_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlInput">token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMapInput">token_url_parameters_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType">oauth2_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap">token_url_parameters_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_properties`<sup>Required</sup> <a name="authorization_code_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```python
authorization_code_properties: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `oauth2_client_application`<sup>Required</sup> <a name="oauth2_client_application" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication"></a>

```python
oauth2_client_application: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference</a>

---

##### `oauth2_credentials`<sup>Required</sup> <a name="oauth2_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials"></a>

```python
oauth2_credentials: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference</a>

---

##### `authorization_code_properties_input`<sup>Optional</sup> <a name="authorization_code_properties_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```python
authorization_code_properties_input: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---

##### `oauth2_client_application_input`<sup>Optional</sup> <a name="oauth2_client_application_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplicationInput"></a>

```python
oauth2_client_application_input: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---

##### `oauth2_credentials_input`<sup>Optional</sup> <a name="oauth2_credentials_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2CredentialsInput"></a>

```python
oauth2_credentials_input: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---

##### `oauth2_grant_type_input`<sup>Optional</sup> <a name="oauth2_grant_type_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantTypeInput"></a>

```python
oauth2_grant_type_input: str
```

- *Type:* str

---

##### `token_url_input`<sup>Optional</sup> <a name="token_url_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlInput"></a>

```python
token_url_input: str
```

- *Type:* str

---

##### `token_url_parameters_map_input`<sup>Optional</sup> <a name="token_url_parameters_map_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```python
token_url_parameters_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `oauth2_grant_type`<sup>Required</sup> <a name="oauth2_grant_type" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType"></a>

```python
oauth2_grant_type: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `token_url_parameters_map`<sup>Required</sup> <a name="token_url_parameters_map" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```python
token_url_parameters_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GlueConnectionAuthenticationConfigurationOauth2Properties
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---


### GlueConnectionAuthenticationConfigurationOutputReference <a name="GlueConnectionAuthenticationConfigurationOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionAuthenticationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">put_basic_authentication_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties">put_oauth2_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">reset_basic_authentication_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">reset_custom_authentication_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetOauth2Properties">reset_oauth2_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_authentication_credentials` <a name="put_basic_authentication_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```python
def put_basic_authentication_credentials(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#password GlueConnection#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#username GlueConnection#username}.

---

##### `put_oauth2_properties` <a name="put_oauth2_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties"></a>

```python
def put_oauth2_properties(
  authorization_code_properties: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties = None,
  oauth2_client_application: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication = None,
  oauth2_credentials: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials = None,
  oauth2_grant_type: str = None,
  token_url: str = None,
  token_url_parameters_map: typing.Mapping[str] = None
) -> None
```

###### `authorization_code_properties`<sup>Optional</sup> <a name="authorization_code_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties.parameter.authorizationCodeProperties"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

authorization_code_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}

---

###### `oauth2_client_application`<sup>Optional</sup> <a name="oauth2_client_application" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties.parameter.oauth2ClientApplication"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

oauth2_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#oauth2_client_application GlueConnection#oauth2_client_application}

---

###### `oauth2_credentials`<sup>Optional</sup> <a name="oauth2_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties.parameter.oauth2Credentials"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

oauth2_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#oauth2_credentials GlueConnection#oauth2_credentials}

---

###### `oauth2_grant_type`<sup>Optional</sup> <a name="oauth2_grant_type" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties.parameter.oauth2GrantType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}.

---

###### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties.parameter.tokenUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#token_url GlueConnection#token_url}.

---

###### `token_url_parameters_map`<sup>Optional</sup> <a name="token_url_parameters_map" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties.parameter.tokenUrlParametersMap"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}.

---

##### `reset_basic_authentication_credentials` <a name="reset_basic_authentication_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```python
def reset_basic_authentication_credentials() -> None
```

##### `reset_custom_authentication_credentials` <a name="reset_custom_authentication_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```python
def reset_custom_authentication_credentials() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_oauth2_properties` <a name="reset_oauth2_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetOauth2Properties"></a>

```python
def reset_oauth2_properties() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basic_authentication_credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties">oauth2_properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">basic_authentication_credentials_input</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">custom_authentication_credentials_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2PropertiesInput">oauth2_properties_input</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">custom_authentication_credentials</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_authentication_credentials`<sup>Required</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```python
basic_authentication_credentials: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `oauth2_properties`<sup>Required</sup> <a name="oauth2_properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties"></a>

```python
oauth2_properties: GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference</a>

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `basic_authentication_credentials_input`<sup>Optional</sup> <a name="basic_authentication_credentials_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```python
basic_authentication_credentials_input: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `custom_authentication_credentials_input`<sup>Optional</sup> <a name="custom_authentication_credentials_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```python
custom_authentication_credentials_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `oauth2_properties_input`<sup>Optional</sup> <a name="oauth2_properties_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2PropertiesInput"></a>

```python
oauth2_properties_input: GlueConnectionAuthenticationConfigurationOauth2Properties
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `custom_authentication_credentials`<sup>Required</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```python
custom_authentication_credentials: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GlueConnectionAuthenticationConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---


### GlueConnectionPhysicalConnectionRequirementsOutputReference <a name="GlueConnectionPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_connection

glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">reset_security_group_id_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_security_group_id_list` <a name="reset_security_group_id_list" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```python
def reset_security_group_id_list() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">security_group_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `security_group_id_list_input`<sup>Optional</sup> <a name="security_group_id_list_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```python
security_group_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `security_group_id_list`<sup>Required</sup> <a name="security_group_id_list" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: GlueConnectionPhysicalConnectionRequirements
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---



