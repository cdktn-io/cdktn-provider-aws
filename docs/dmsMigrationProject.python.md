# `dmsMigrationProject` Submodule <a name="`dmsMigrationProject` Submodule" id="@cdktn/provider-aws.dmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsMigrationProject <a name="DmsMigrationProject" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project aws_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProject(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_profile_arn: str,
  description: str = None,
  name: str = None,
  region: str = None,
  schema_conversion_application_attributes: IResolvable | typing.List[DmsMigrationProjectSchemaConversionApplicationAttributes] = None,
  source_data_provider_descriptor: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptor] = None,
  tags: typing.Mapping[str] = None,
  target_data_provider_descriptor: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptor] = None,
  timeouts: DmsMigrationProjectTimeouts = None,
  transformation_rules: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.schemaConversionApplicationAttributes">schema_conversion_application_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>]</code> | schema_conversion_application_attributes block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.sourceDataProviderDescriptor">source_data_provider_descriptor</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>]</code> | source_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.targetDataProviderDescriptor">target_data_provider_descriptor</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>]</code> | target_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.transformationRules">transformation_rules</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.instanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#region DmsMigrationProject#region}

---

##### `schema_conversion_application_attributes`<sup>Optional</sup> <a name="schema_conversion_application_attributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.schemaConversionApplicationAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>]

schema_conversion_application_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `source_data_provider_descriptor`<sup>Optional</sup> <a name="source_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.sourceDataProviderDescriptor"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>]

source_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#source_data_provider_descriptor DmsMigrationProject#source_data_provider_descriptor}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}.

---

##### `target_data_provider_descriptor`<sup>Optional</sup> <a name="target_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.targetDataProviderDescriptor"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>]

target_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#target_data_provider_descriptor DmsMigrationProject#target_data_provider_descriptor}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#timeouts DmsMigrationProject#timeouts}

---

##### `transformation_rules`<sup>Optional</sup> <a name="transformation_rules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.transformationRules"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes">put_schema_conversion_application_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor">put_source_data_provider_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor">put_target_data_provider_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes">reset_schema_conversion_application_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptor">reset_source_data_provider_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptor">reset_target_data_provider_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTransformationRules">reset_transformation_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schema_conversion_application_attributes` <a name="put_schema_conversion_application_attributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes"></a>

```python
def put_schema_conversion_application_attributes(
  value: IResolvable | typing.List[DmsMigrationProjectSchemaConversionApplicationAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>]

---

##### `put_source_data_provider_descriptor` <a name="put_source_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor"></a>

```python
def put_source_data_provider_descriptor(
  value: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptor]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>]

---

##### `put_target_data_provider_descriptor` <a name="put_target_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor"></a>

```python
def put_target_data_provider_descriptor(
  value: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptor]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#create DmsMigrationProject#create}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_schema_conversion_application_attributes` <a name="reset_schema_conversion_application_attributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes"></a>

```python
def reset_schema_conversion_application_attributes() -> None
```

##### `reset_source_data_provider_descriptor` <a name="reset_source_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptor"></a>

```python
def reset_source_data_provider_descriptor() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_data_provider_descriptor` <a name="reset_target_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptor"></a>

```python
def reset_target_data_provider_descriptor() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transformation_rules` <a name="reset_transformation_rules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTransformationRules"></a>

```python
def reset_transformation_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsMigrationProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes">schema_conversion_application_attributes</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList">DmsMigrationProjectSchemaConversionApplicationAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptor">source_data_provider_descriptor</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList">DmsMigrationProjectSourceDataProviderDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptor">target_data_provider_descriptor</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList">DmsMigrationProjectTargetDataProviderDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference">DmsMigrationProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput">schema_conversion_application_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorInput">source_data_provider_descriptor_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorInput">target_data_provider_descriptor_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput">transformation_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRules">transformation_rules</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `instance_profile_name`<sup>Required</sup> <a name="instance_profile_name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName"></a>

```python
instance_profile_name: str
```

- *Type:* str

---

##### `schema_conversion_application_attributes`<sup>Required</sup> <a name="schema_conversion_application_attributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```python
schema_conversion_application_attributes: DmsMigrationProjectSchemaConversionApplicationAttributesList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList">DmsMigrationProjectSchemaConversionApplicationAttributesList</a>

---

##### `source_data_provider_descriptor`<sup>Required</sup> <a name="source_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptor"></a>

```python
source_data_provider_descriptor: DmsMigrationProjectSourceDataProviderDescriptorList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList">DmsMigrationProjectSourceDataProviderDescriptorList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `target_data_provider_descriptor`<sup>Required</sup> <a name="target_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptor"></a>

```python
target_data_provider_descriptor: DmsMigrationProjectTargetDataProviderDescriptorList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList">DmsMigrationProjectTargetDataProviderDescriptorList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeouts"></a>

```python
timeouts: DmsMigrationProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference">DmsMigrationProjectTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `schema_conversion_application_attributes_input`<sup>Optional</sup> <a name="schema_conversion_application_attributes_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput"></a>

```python
schema_conversion_application_attributes_input: IResolvable | typing.List[DmsMigrationProjectSchemaConversionApplicationAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>]

---

##### `source_data_provider_descriptor_input`<sup>Optional</sup> <a name="source_data_provider_descriptor_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorInput"></a>

```python
source_data_provider_descriptor_input: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptor]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_data_provider_descriptor_input`<sup>Optional</sup> <a name="target_data_provider_descriptor_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorInput"></a>

```python
target_data_provider_descriptor_input: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptor]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DmsMigrationProjectTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---

##### `transformation_rules_input`<sup>Optional</sup> <a name="transformation_rules_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput"></a>

```python
transformation_rules_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transformation_rules`<sup>Required</sup> <a name="transformation_rules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRules"></a>

```python
transformation_rules: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsMigrationProjectConfig <a name="DmsMigrationProjectConfig" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_profile_arn: str,
  description: str = None,
  name: str = None,
  region: str = None,
  schema_conversion_application_attributes: IResolvable | typing.List[DmsMigrationProjectSchemaConversionApplicationAttributes] = None,
  source_data_provider_descriptor: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptor] = None,
  tags: typing.Mapping[str] = None,
  target_data_provider_descriptor: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptor] = None,
  timeouts: DmsMigrationProjectTimeouts = None,
  transformation_rules: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes">schema_conversion_application_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>]</code> | schema_conversion_application_attributes block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptor">source_data_provider_descriptor</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>]</code> | source_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptor">target_data_provider_descriptor</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>]</code> | target_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules">transformation_rules</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#region DmsMigrationProject#region}

---

##### `schema_conversion_application_attributes`<sup>Optional</sup> <a name="schema_conversion_application_attributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes"></a>

```python
schema_conversion_application_attributes: IResolvable | typing.List[DmsMigrationProjectSchemaConversionApplicationAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>]

schema_conversion_application_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `source_data_provider_descriptor`<sup>Optional</sup> <a name="source_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptor"></a>

```python
source_data_provider_descriptor: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptor]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>]

source_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#source_data_provider_descriptor DmsMigrationProject#source_data_provider_descriptor}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}.

---

##### `target_data_provider_descriptor`<sup>Optional</sup> <a name="target_data_provider_descriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptor"></a>

```python
target_data_provider_descriptor: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptor]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>]

target_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#target_data_provider_descriptor DmsMigrationProject#target_data_provider_descriptor}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.timeouts"></a>

```python
timeouts: DmsMigrationProjectTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#timeouts DmsMigrationProject#timeouts}

---

##### `transformation_rules`<sup>Optional</sup> <a name="transformation_rules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules"></a>

```python
transformation_rules: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}.

---

### DmsMigrationProjectSchemaConversionApplicationAttributes <a name="DmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes(
  s3_bucket_path: str = None,
  s3_bucket_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath">s3_bucket_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn">s3_bucket_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}. |

---

##### `s3_bucket_path`<sup>Optional</sup> <a name="s3_bucket_path" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath"></a>

```python
s3_bucket_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}.

---

##### `s3_bucket_role_arn`<sup>Optional</sup> <a name="s3_bucket_role_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn"></a>

```python
s3_bucket_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}.

---

### DmsMigrationProjectSourceDataProviderDescriptor <a name="DmsMigrationProjectSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor(
  data_provider_arn: str,
  secrets_manager_access_role_arn: str = None,
  secrets_manager_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `data_provider_arn`<sup>Required</sup> <a name="data_provider_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `secrets_manager_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secrets_manager_secret_id`<sup>Optional</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTargetDataProviderDescriptor <a name="DmsMigrationProjectTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor(
  data_provider_arn: str,
  secrets_manager_access_role_arn: str = None,
  secrets_manager_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `data_provider_arn`<sup>Required</sup> <a name="data_provider_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `secrets_manager_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secrets_manager_secret_id`<sup>Optional</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTimeouts <a name="DmsMigrationProjectTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#create DmsMigrationProject#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsMigrationProjectSchemaConversionApplicationAttributesList <a name="DmsMigrationProjectSchemaConversionApplicationAttributesList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsMigrationProjectSchemaConversionApplicationAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>]

---


### DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath">reset_s3_bucket_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn">reset_s3_bucket_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket_path` <a name="reset_s3_bucket_path" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath"></a>

```python
def reset_s3_bucket_path() -> None
```

##### `reset_s3_bucket_role_arn` <a name="reset_s3_bucket_role_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn"></a>

```python
def reset_s3_bucket_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput">s3_bucket_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput">s3_bucket_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">s3_bucket_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">s3_bucket_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_path_input`<sup>Optional</sup> <a name="s3_bucket_path_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput"></a>

```python
s3_bucket_path_input: str
```

- *Type:* str

---

##### `s3_bucket_role_arn_input`<sup>Optional</sup> <a name="s3_bucket_role_arn_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput"></a>

```python
s3_bucket_role_arn_input: str
```

- *Type:* str

---

##### `s3_bucket_path`<sup>Required</sup> <a name="s3_bucket_path" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```python
s3_bucket_path: str
```

- *Type:* str

---

##### `s3_bucket_role_arn`<sup>Required</sup> <a name="s3_bucket_role_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```python
s3_bucket_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DmsMigrationProjectSourceDataProviderDescriptorList <a name="DmsMigrationProjectSourceDataProviderDescriptorList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsMigrationProjectSourceDataProviderDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsMigrationProjectSourceDataProviderDescriptor]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>]

---


### DmsMigrationProjectSourceDataProviderDescriptorOutputReference <a name="DmsMigrationProjectSourceDataProviderDescriptorOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn">reset_secrets_manager_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerSecretId">reset_secrets_manager_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secrets_manager_access_role_arn` <a name="reset_secrets_manager_access_role_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn"></a>

```python
def reset_secrets_manager_access_role_arn() -> None
```

##### `reset_secrets_manager_secret_id` <a name="reset_secrets_manager_secret_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerSecretId"></a>

```python
def reset_secrets_manager_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArnInput">data_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput">secrets_manager_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput">secrets_manager_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_provider_name`<sup>Required</sup> <a name="data_provider_name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

---

##### `data_provider_arn_input`<sup>Optional</sup> <a name="data_provider_arn_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArnInput"></a>

```python
data_provider_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn_input`<sup>Optional</sup> <a name="secrets_manager_access_role_arn_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```python
secrets_manager_access_role_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_secret_id_input`<sup>Optional</sup> <a name="secrets_manager_secret_id_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput"></a>

```python
secrets_manager_secret_id_input: str
```

- *Type:* str

---

##### `data_provider_arn`<sup>Required</sup> <a name="data_provider_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsMigrationProjectSourceDataProviderDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>

---


### DmsMigrationProjectTargetDataProviderDescriptorList <a name="DmsMigrationProjectTargetDataProviderDescriptorList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsMigrationProjectTargetDataProviderDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsMigrationProjectTargetDataProviderDescriptor]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>]

---


### DmsMigrationProjectTargetDataProviderDescriptorOutputReference <a name="DmsMigrationProjectTargetDataProviderDescriptorOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn">reset_secrets_manager_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerSecretId">reset_secrets_manager_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secrets_manager_access_role_arn` <a name="reset_secrets_manager_access_role_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn"></a>

```python
def reset_secrets_manager_access_role_arn() -> None
```

##### `reset_secrets_manager_secret_id` <a name="reset_secrets_manager_secret_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerSecretId"></a>

```python
def reset_secrets_manager_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArnInput">data_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput">secrets_manager_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput">secrets_manager_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn">secrets_manager_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretId">secrets_manager_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_provider_name`<sup>Required</sup> <a name="data_provider_name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

---

##### `data_provider_arn_input`<sup>Optional</sup> <a name="data_provider_arn_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArnInput"></a>

```python
data_provider_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn_input`<sup>Optional</sup> <a name="secrets_manager_access_role_arn_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```python
secrets_manager_access_role_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_secret_id_input`<sup>Optional</sup> <a name="secrets_manager_secret_id_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput"></a>

```python
secrets_manager_secret_id_input: str
```

- *Type:* str

---

##### `data_provider_arn`<sup>Required</sup> <a name="data_provider_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

---

##### `secrets_manager_access_role_arn`<sup>Required</sup> <a name="secrets_manager_access_role_arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn"></a>

```python
secrets_manager_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_secret_id`<sup>Required</sup> <a name="secrets_manager_secret_id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretId"></a>

```python
secrets_manager_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsMigrationProjectTargetDataProviderDescriptor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>

---


### DmsMigrationProjectTimeoutsOutputReference <a name="DmsMigrationProjectTimeoutsOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import dms_migration_project

dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsMigrationProjectTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---



