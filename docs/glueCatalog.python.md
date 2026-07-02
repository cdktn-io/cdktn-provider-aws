# `glueCatalog` Submodule <a name="`glueCatalog` Submodule" id="@cdktn/provider-aws.glueCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalog <a name="GlueCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog aws_glue_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalog(
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
  allow_full_table_external_data_access: str = None,
  catalog_properties: IResolvable | typing.List[GlueCatalogCatalogProperties] = None,
  create_database_default_permissions: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissions] = None,
  create_table_default_permissions: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissions] = None,
  description: str = None,
  federated_catalog: IResolvable | typing.List[GlueCatalogFederatedCatalog] = None,
  overwrite_child_resource_permissions_with_default: str = None,
  parameters: typing.Mapping[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  target_redshift_catalog: IResolvable | typing.List[GlueCatalogTargetRedshiftCatalog] = None,
  timeouts: GlueCatalogTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#name GlueCatalog#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.allowFullTableExternalDataAccess">allow_full_table_external_data_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.catalogProperties">catalog_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>]</code> | catalog_properties block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.createDatabaseDefaultPermissions">create_database_default_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>]</code> | create_database_default_permissions block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>]</code> | create_table_default_permissions block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#description GlueCatalog#description}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.federatedCatalog">federated_catalog</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>]</code> | federated_catalog block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.overwriteChildResourcePermissionsWithDefault">overwrite_child_resource_permissions_with_default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#tags GlueCatalog#tags}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.targetRedshiftCatalog">target_redshift_catalog</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>]</code> | target_redshift_catalog block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#name GlueCatalog#name}.

---

##### `allow_full_table_external_data_access`<sup>Optional</sup> <a name="allow_full_table_external_data_access" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.allowFullTableExternalDataAccess"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}.

---

##### `catalog_properties`<sup>Optional</sup> <a name="catalog_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.catalogProperties"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>]

catalog_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_properties GlueCatalog#catalog_properties}

---

##### `create_database_default_permissions`<sup>Optional</sup> <a name="create_database_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.createDatabaseDefaultPermissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>]

create_database_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#create_database_default_permissions GlueCatalog#create_database_default_permissions}

---

##### `create_table_default_permissions`<sup>Optional</sup> <a name="create_table_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.createTableDefaultPermissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>]

create_table_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#create_table_default_permissions GlueCatalog#create_table_default_permissions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#description GlueCatalog#description}.

---

##### `federated_catalog`<sup>Optional</sup> <a name="federated_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.federatedCatalog"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>]

federated_catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#federated_catalog GlueCatalog#federated_catalog}

---

##### `overwrite_child_resource_permissions_with_default`<sup>Optional</sup> <a name="overwrite_child_resource_permissions_with_default" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.overwriteChildResourcePermissionsWithDefault"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#region GlueCatalog#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#tags GlueCatalog#tags}.

---

##### `target_redshift_catalog`<sup>Optional</sup> <a name="target_redshift_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.targetRedshiftCatalog"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>]

target_redshift_catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#target_redshift_catalog GlueCatalog#target_redshift_catalog}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#timeouts GlueCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putCatalogProperties">put_catalog_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions">put_create_database_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions">put_create_table_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putFederatedCatalog">put_federated_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putTargetRedshiftCatalog">put_target_redshift_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetAllowFullTableExternalDataAccess">reset_allow_full_table_external_data_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCatalogProperties">reset_catalog_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCreateDatabaseDefaultPermissions">reset_create_database_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCreateTableDefaultPermissions">reset_create_table_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetFederatedCatalog">reset_federated_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetOverwriteChildResourcePermissionsWithDefault">reset_overwrite_child_resource_permissions_with_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTargetRedshiftCatalog">reset_target_redshift_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_catalog_properties` <a name="put_catalog_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCatalogProperties"></a>

```python
def put_catalog_properties(
  value: IResolvable | typing.List[GlueCatalogCatalogProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCatalogProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>]

---

##### `put_create_database_default_permissions` <a name="put_create_database_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions"></a>

```python
def put_create_database_default_permissions(
  value: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>]

---

##### `put_create_table_default_permissions` <a name="put_create_table_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions"></a>

```python
def put_create_table_default_permissions(
  value: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>]

---

##### `put_federated_catalog` <a name="put_federated_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putFederatedCatalog"></a>

```python
def put_federated_catalog(
  value: IResolvable | typing.List[GlueCatalogFederatedCatalog]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putFederatedCatalog.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>]

---

##### `put_target_redshift_catalog` <a name="put_target_redshift_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTargetRedshiftCatalog"></a>

```python
def put_target_redshift_catalog(
  value: IResolvable | typing.List[GlueCatalogTargetRedshiftCatalog]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTargetRedshiftCatalog.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#create GlueCatalog#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#delete GlueCatalog#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#update GlueCatalog#update}

---

##### `reset_allow_full_table_external_data_access` <a name="reset_allow_full_table_external_data_access" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetAllowFullTableExternalDataAccess"></a>

```python
def reset_allow_full_table_external_data_access() -> None
```

##### `reset_catalog_properties` <a name="reset_catalog_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCatalogProperties"></a>

```python
def reset_catalog_properties() -> None
```

##### `reset_create_database_default_permissions` <a name="reset_create_database_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCreateDatabaseDefaultPermissions"></a>

```python
def reset_create_database_default_permissions() -> None
```

##### `reset_create_table_default_permissions` <a name="reset_create_table_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCreateTableDefaultPermissions"></a>

```python
def reset_create_table_default_permissions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_federated_catalog` <a name="reset_federated_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetFederatedCatalog"></a>

```python
def reset_federated_catalog() -> None
```

##### `reset_overwrite_child_resource_permissions_with_default` <a name="reset_overwrite_child_resource_permissions_with_default" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetOverwriteChildResourcePermissionsWithDefault"></a>

```python
def reset_overwrite_child_resource_permissions_with_default() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_redshift_catalog` <a name="reset_target_redshift_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTargetRedshiftCatalog"></a>

```python
def reset_target_redshift_catalog() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isConstruct"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformElement"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformResource"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogProperties">catalog_properties</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList">GlueCatalogCatalogPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissions">create_database_default_permissions</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList">GlueCatalogCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList">GlueCatalogCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.federatedCatalog">federated_catalog</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList">GlueCatalogFederatedCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tagsAll">tags_all</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.targetRedshiftCatalog">target_redshift_catalog</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList">GlueCatalogTargetRedshiftCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference">GlueCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccessInput">allow_full_table_external_data_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogPropertiesInput">catalog_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissionsInput">create_database_default_permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTableDefaultPermissionsInput">create_table_default_permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.federatedCatalogInput">federated_catalog_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefaultInput">overwrite_child_resource_permissions_with_default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.targetRedshiftCatalogInput">target_redshift_catalog_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccess">allow_full_table_external_data_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefault">overwrite_child_resource_permissions_with_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `catalog_properties`<sup>Required</sup> <a name="catalog_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogProperties"></a>

```python
catalog_properties: GlueCatalogCatalogPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList">GlueCatalogCatalogPropertiesList</a>

---

##### `create_database_default_permissions`<sup>Required</sup> <a name="create_database_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissions"></a>

```python
create_database_default_permissions: GlueCatalogCreateDatabaseDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList">GlueCatalogCreateDatabaseDefaultPermissionsList</a>

---

##### `create_table_default_permissions`<sup>Required</sup> <a name="create_table_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTableDefaultPermissions"></a>

```python
create_table_default_permissions: GlueCatalogCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList">GlueCatalogCreateTableDefaultPermissionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `federated_catalog`<sup>Required</sup> <a name="federated_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.federatedCatalog"></a>

```python
federated_catalog: GlueCatalogFederatedCatalogList
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList">GlueCatalogFederatedCatalogList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktn.StringMap

---

##### `target_redshift_catalog`<sup>Required</sup> <a name="target_redshift_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.targetRedshiftCatalog"></a>

```python
target_redshift_catalog: GlueCatalogTargetRedshiftCatalogList
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList">GlueCatalogTargetRedshiftCatalogList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.timeouts"></a>

```python
timeouts: GlueCatalogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference">GlueCatalogTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allow_full_table_external_data_access_input`<sup>Optional</sup> <a name="allow_full_table_external_data_access_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccessInput"></a>

```python
allow_full_table_external_data_access_input: str
```

- *Type:* str

---

##### `catalog_properties_input`<sup>Optional</sup> <a name="catalog_properties_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogPropertiesInput"></a>

```python
catalog_properties_input: IResolvable | typing.List[GlueCatalogCatalogProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>]

---

##### `create_database_default_permissions_input`<sup>Optional</sup> <a name="create_database_default_permissions_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissionsInput"></a>

```python
create_database_default_permissions_input: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>]

---

##### `create_table_default_permissions_input`<sup>Optional</sup> <a name="create_table_default_permissions_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTableDefaultPermissionsInput"></a>

```python
create_table_default_permissions_input: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `federated_catalog_input`<sup>Optional</sup> <a name="federated_catalog_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.federatedCatalogInput"></a>

```python
federated_catalog_input: IResolvable | typing.List[GlueCatalogFederatedCatalog]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `overwrite_child_resource_permissions_with_default_input`<sup>Optional</sup> <a name="overwrite_child_resource_permissions_with_default_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefaultInput"></a>

```python
overwrite_child_resource_permissions_with_default_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_redshift_catalog_input`<sup>Optional</sup> <a name="target_redshift_catalog_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.targetRedshiftCatalogInput"></a>

```python
target_redshift_catalog_input: IResolvable | typing.List[GlueCatalogTargetRedshiftCatalog]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GlueCatalogTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a>

---

##### `allow_full_table_external_data_access`<sup>Required</sup> <a name="allow_full_table_external_data_access" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccess"></a>

```python
allow_full_table_external_data_access: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `overwrite_child_resource_permissions_with_default`<sup>Required</sup> <a name="overwrite_child_resource_permissions_with_default" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefault"></a>

```python
overwrite_child_resource_permissions_with_default: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogCatalogProperties <a name="GlueCatalogCatalogProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCatalogProperties(
  custom_properties: typing.Mapping[str] = None,
  data_lake_access_properties: IResolvable | typing.List[GlueCatalogCatalogPropertiesDataLakeAccessProperties] = None,
  iceberg_optimization_properties: IResolvable | typing.List[GlueCatalogCatalogPropertiesIcebergOptimizationProperties] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.customProperties">custom_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#custom_properties GlueCatalog#custom_properties}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.dataLakeAccessProperties">data_lake_access_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>]</code> | data_lake_access_properties block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.icebergOptimizationProperties">iceberg_optimization_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>]</code> | iceberg_optimization_properties block. |

---

##### `custom_properties`<sup>Optional</sup> <a name="custom_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.customProperties"></a>

```python
custom_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#custom_properties GlueCatalog#custom_properties}.

---

##### `data_lake_access_properties`<sup>Optional</sup> <a name="data_lake_access_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.dataLakeAccessProperties"></a>

```python
data_lake_access_properties: IResolvable | typing.List[GlueCatalogCatalogPropertiesDataLakeAccessProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>]

data_lake_access_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_access_properties GlueCatalog#data_lake_access_properties}

---

##### `iceberg_optimization_properties`<sup>Optional</sup> <a name="iceberg_optimization_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.icebergOptimizationProperties"></a>

```python
iceberg_optimization_properties: IResolvable | typing.List[GlueCatalogCatalogPropertiesIcebergOptimizationProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>]

iceberg_optimization_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#iceberg_optimization_properties GlueCatalog#iceberg_optimization_properties}

---

### GlueCatalogCatalogPropertiesDataLakeAccessProperties <a name="GlueCatalogCatalogPropertiesDataLakeAccessProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties(
  catalog_type: str = None,
  data_lake_access: bool | IResolvable = None,
  data_transfer_role: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.catalogType">catalog_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_type GlueCatalog#catalog_type}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataLakeAccess">data_lake_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_access GlueCatalog#data_lake_access}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataTransferRole">data_transfer_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_transfer_role GlueCatalog#data_transfer_role}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#kms_key GlueCatalog#kms_key}. |

---

##### `catalog_type`<sup>Optional</sup> <a name="catalog_type" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_type GlueCatalog#catalog_type}.

---

##### `data_lake_access`<sup>Optional</sup> <a name="data_lake_access" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataLakeAccess"></a>

```python
data_lake_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_access GlueCatalog#data_lake_access}.

---

##### `data_transfer_role`<sup>Optional</sup> <a name="data_transfer_role" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataTransferRole"></a>

```python
data_transfer_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_transfer_role GlueCatalog#data_transfer_role}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#kms_key GlueCatalog#kms_key}.

---

### GlueCatalogCatalogPropertiesIcebergOptimizationProperties <a name="GlueCatalogCatalogPropertiesIcebergOptimizationProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties(
  compaction: typing.Mapping[str] = None,
  orphan_file_deletion: typing.Mapping[str] = None,
  retention: typing.Mapping[str] = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.compaction">compaction</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#compaction GlueCatalog#compaction}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.orphanFileDeletion">orphan_file_deletion</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#orphan_file_deletion GlueCatalog#orphan_file_deletion}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.retention">retention</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#retention GlueCatalog#retention}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#role_arn GlueCatalog#role_arn}. |

---

##### `compaction`<sup>Optional</sup> <a name="compaction" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.compaction"></a>

```python
compaction: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#compaction GlueCatalog#compaction}.

---

##### `orphan_file_deletion`<sup>Optional</sup> <a name="orphan_file_deletion" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.orphanFileDeletion"></a>

```python
orphan_file_deletion: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#orphan_file_deletion GlueCatalog#orphan_file_deletion}.

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.retention"></a>

```python
retention: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#retention GlueCatalog#retention}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#role_arn GlueCatalog#role_arn}.

---

### GlueCatalogConfig <a name="GlueCatalogConfig" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  allow_full_table_external_data_access: str = None,
  catalog_properties: IResolvable | typing.List[GlueCatalogCatalogProperties] = None,
  create_database_default_permissions: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissions] = None,
  create_table_default_permissions: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissions] = None,
  description: str = None,
  federated_catalog: IResolvable | typing.List[GlueCatalogFederatedCatalog] = None,
  overwrite_child_resource_permissions_with_default: str = None,
  parameters: typing.Mapping[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  target_redshift_catalog: IResolvable | typing.List[GlueCatalogTargetRedshiftCatalog] = None,
  timeouts: GlueCatalogTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#name GlueCatalog#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.allowFullTableExternalDataAccess">allow_full_table_external_data_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.catalogProperties">catalog_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>]</code> | catalog_properties block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.createDatabaseDefaultPermissions">create_database_default_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>]</code> | create_database_default_permissions block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>]</code> | create_table_default_permissions block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#description GlueCatalog#description}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.federatedCatalog">federated_catalog</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>]</code> | federated_catalog block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.overwriteChildResourcePermissionsWithDefault">overwrite_child_resource_permissions_with_default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#tags GlueCatalog#tags}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.targetRedshiftCatalog">target_redshift_catalog</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>]</code> | target_redshift_catalog block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#name GlueCatalog#name}.

---

##### `allow_full_table_external_data_access`<sup>Optional</sup> <a name="allow_full_table_external_data_access" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.allowFullTableExternalDataAccess"></a>

```python
allow_full_table_external_data_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}.

---

##### `catalog_properties`<sup>Optional</sup> <a name="catalog_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.catalogProperties"></a>

```python
catalog_properties: IResolvable | typing.List[GlueCatalogCatalogProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>]

catalog_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_properties GlueCatalog#catalog_properties}

---

##### `create_database_default_permissions`<sup>Optional</sup> <a name="create_database_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.createDatabaseDefaultPermissions"></a>

```python
create_database_default_permissions: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>]

create_database_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#create_database_default_permissions GlueCatalog#create_database_default_permissions}

---

##### `create_table_default_permissions`<sup>Optional</sup> <a name="create_table_default_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.createTableDefaultPermissions"></a>

```python
create_table_default_permissions: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>]

create_table_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#create_table_default_permissions GlueCatalog#create_table_default_permissions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#description GlueCatalog#description}.

---

##### `federated_catalog`<sup>Optional</sup> <a name="federated_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.federatedCatalog"></a>

```python
federated_catalog: IResolvable | typing.List[GlueCatalogFederatedCatalog]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>]

federated_catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#federated_catalog GlueCatalog#federated_catalog}

---

##### `overwrite_child_resource_permissions_with_default`<sup>Optional</sup> <a name="overwrite_child_resource_permissions_with_default" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.overwriteChildResourcePermissionsWithDefault"></a>

```python
overwrite_child_resource_permissions_with_default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#region GlueCatalog#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#tags GlueCatalog#tags}.

---

##### `target_redshift_catalog`<sup>Optional</sup> <a name="target_redshift_catalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.targetRedshiftCatalog"></a>

```python
target_redshift_catalog: IResolvable | typing.List[GlueCatalogTargetRedshiftCatalog]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>]

target_redshift_catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#target_redshift_catalog GlueCatalog#target_redshift_catalog}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.timeouts"></a>

```python
timeouts: GlueCatalogTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#timeouts GlueCatalog#timeouts}

---

### GlueCatalogCreateDatabaseDefaultPermissions <a name="GlueCatalogCreateDatabaseDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions(
  permissions: typing.List[str] = None,
  principal: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissionsPrincipal] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.principal">principal</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>]</code> | principal block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.principal"></a>

```python
principal: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissionsPrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#principal GlueCatalog#principal}

---

### GlueCatalogCreateDatabaseDefaultPermissionsPrincipal <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal(
  data_lake_principal_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}. |

---

##### `data_lake_principal_identifier`<sup>Optional</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}.

---

### GlueCatalogCreateTableDefaultPermissions <a name="GlueCatalogCreateTableDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateTableDefaultPermissions(
  permissions: typing.List[str] = None,
  principal: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissionsPrincipal] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.principal">principal</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>]</code> | principal block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.principal"></a>

```python
principal: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissionsPrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#principal GlueCatalog#principal}

---

### GlueCatalogCreateTableDefaultPermissionsPrincipal <a name="GlueCatalogCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal(
  data_lake_principal_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}. |

---

##### `data_lake_principal_identifier`<sup>Optional</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}.

---

### GlueCatalogFederatedCatalog <a name="GlueCatalogFederatedCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogFederatedCatalog(
  connection_name: str = None,
  connection_type: str = None,
  identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#connection_name GlueCatalog#connection_name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#connection_type GlueCatalog#connection_type}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#identifier GlueCatalog#identifier}. |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#connection_name GlueCatalog#connection_name}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#connection_type GlueCatalog#connection_type}.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#identifier GlueCatalog#identifier}.

---

### GlueCatalogTargetRedshiftCatalog <a name="GlueCatalogTargetRedshiftCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogTargetRedshiftCatalog(
  catalog_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog.property.catalogArn">catalog_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_arn GlueCatalog#catalog_arn}. |

---

##### `catalog_arn`<sup>Required</sup> <a name="catalog_arn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog.property.catalogArn"></a>

```python
catalog_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_arn GlueCatalog#catalog_arn}.

---

### GlueCatalogTimeouts <a name="GlueCatalogTimeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#create GlueCatalog#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#delete GlueCatalog#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#update GlueCatalog#update}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList <a name="GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCatalogCatalogPropertiesDataLakeAccessProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>]

---


### GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetCatalogType">reset_catalog_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataLakeAccess">reset_data_lake_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataTransferRole">reset_data_transfer_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_type` <a name="reset_catalog_type" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetCatalogType"></a>

```python
def reset_catalog_type() -> None
```

##### `reset_data_lake_access` <a name="reset_data_lake_access" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataLakeAccess"></a>

```python
def reset_data_lake_access() -> None
```

##### `reset_data_transfer_role` <a name="reset_data_transfer_role" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataTransferRole"></a>

```python
def reset_data_transfer_role() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName">managed_workgroup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus">managed_workgroup_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName">redshift_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogTypeInput">catalog_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccessInput">data_lake_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRoleInput">data_transfer_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType">catalog_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess">data_lake_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole">data_transfer_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_workgroup_name`<sup>Required</sup> <a name="managed_workgroup_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName"></a>

```python
managed_workgroup_name: str
```

- *Type:* str

---

##### `managed_workgroup_status`<sup>Required</sup> <a name="managed_workgroup_status" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus"></a>

```python
managed_workgroup_status: str
```

- *Type:* str

---

##### `redshift_database_name`<sup>Required</sup> <a name="redshift_database_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName"></a>

```python
redshift_database_name: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `catalog_type_input`<sup>Optional</sup> <a name="catalog_type_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogTypeInput"></a>

```python
catalog_type_input: str
```

- *Type:* str

---

##### `data_lake_access_input`<sup>Optional</sup> <a name="data_lake_access_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccessInput"></a>

```python
data_lake_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_transfer_role_input`<sup>Optional</sup> <a name="data_transfer_role_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRoleInput"></a>

```python
data_transfer_role_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `catalog_type`<sup>Required</sup> <a name="catalog_type" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

---

##### `data_lake_access`<sup>Required</sup> <a name="data_lake_access" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess"></a>

```python
data_lake_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_transfer_role`<sup>Required</sup> <a name="data_transfer_role" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole"></a>

```python
data_transfer_role: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogCatalogPropertiesDataLakeAccessProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---


### GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList <a name="GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCatalogCatalogPropertiesIcebergOptimizationProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>]

---


### GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetCompaction">reset_compaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetOrphanFileDeletion">reset_orphan_file_deletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetRetention">reset_retention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compaction` <a name="reset_compaction" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetCompaction"></a>

```python
def reset_compaction() -> None
```

##### `reset_orphan_file_deletion` <a name="reset_orphan_file_deletion" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetOrphanFileDeletion"></a>

```python
def reset_orphan_file_deletion() -> None
```

##### `reset_retention` <a name="reset_retention" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetRetention"></a>

```python
def reset_retention() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compactionInput">compaction_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletionInput">orphan_file_deletion_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retentionInput">retention_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction">compaction</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion">orphan_file_deletion</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention">retention</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compaction_input`<sup>Optional</sup> <a name="compaction_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compactionInput"></a>

```python
compaction_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `orphan_file_deletion_input`<sup>Optional</sup> <a name="orphan_file_deletion_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletionInput"></a>

```python
orphan_file_deletion_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retentionInput"></a>

```python
retention_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `compaction`<sup>Required</sup> <a name="compaction" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction"></a>

```python
compaction: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `orphan_file_deletion`<sup>Required</sup> <a name="orphan_file_deletion" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion"></a>

```python
orphan_file_deletion: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention"></a>

```python
retention: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogCatalogPropertiesIcebergOptimizationProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>

---


### GlueCatalogCatalogPropertiesList <a name="GlueCatalogCatalogPropertiesList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCatalogPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogCatalogPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCatalogCatalogProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>]

---


### GlueCatalogCatalogPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCatalogPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties">put_data_lake_access_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putIcebergOptimizationProperties">put_iceberg_optimization_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetCustomProperties">reset_custom_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetDataLakeAccessProperties">reset_data_lake_access_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetIcebergOptimizationProperties">reset_iceberg_optimization_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_lake_access_properties` <a name="put_data_lake_access_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties"></a>

```python
def put_data_lake_access_properties(
  value: IResolvable | typing.List[GlueCatalogCatalogPropertiesDataLakeAccessProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>]

---

##### `put_iceberg_optimization_properties` <a name="put_iceberg_optimization_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putIcebergOptimizationProperties"></a>

```python
def put_iceberg_optimization_properties(
  value: IResolvable | typing.List[GlueCatalogCatalogPropertiesIcebergOptimizationProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putIcebergOptimizationProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>]

---

##### `reset_custom_properties` <a name="reset_custom_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetCustomProperties"></a>

```python
def reset_custom_properties() -> None
```

##### `reset_data_lake_access_properties` <a name="reset_data_lake_access_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetDataLakeAccessProperties"></a>

```python
def reset_data_lake_access_properties() -> None
```

##### `reset_iceberg_optimization_properties` <a name="reset_iceberg_optimization_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetIcebergOptimizationProperties"></a>

```python
def reset_iceberg_optimization_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties">data_lake_access_properties</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties">iceberg_optimization_properties</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customPropertiesInput">custom_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessPropertiesInput">data_lake_access_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationPropertiesInput">iceberg_optimization_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customProperties">custom_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_access_properties`<sup>Required</sup> <a name="data_lake_access_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties"></a>

```python
data_lake_access_properties: GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a>

---

##### `iceberg_optimization_properties`<sup>Required</sup> <a name="iceberg_optimization_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties"></a>

```python
iceberg_optimization_properties: GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a>

---

##### `custom_properties_input`<sup>Optional</sup> <a name="custom_properties_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customPropertiesInput"></a>

```python
custom_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_lake_access_properties_input`<sup>Optional</sup> <a name="data_lake_access_properties_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessPropertiesInput"></a>

```python
data_lake_access_properties_input: IResolvable | typing.List[GlueCatalogCatalogPropertiesDataLakeAccessProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>]

---

##### `iceberg_optimization_properties_input`<sup>Optional</sup> <a name="iceberg_optimization_properties_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationPropertiesInput"></a>

```python
iceberg_optimization_properties_input: IResolvable | typing.List[GlueCatalogCatalogPropertiesIcebergOptimizationProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>]

---

##### `custom_properties`<sup>Required</sup> <a name="custom_properties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customProperties"></a>

```python
custom_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogCatalogProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>

---


### GlueCatalogCreateDatabaseDefaultPermissionsList <a name="GlueCatalogCreateDatabaseDefaultPermissionsList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>]

---


### GlueCatalogCreateDatabaseDefaultPermissionsOutputReference <a name="GlueCatalogCreateDatabaseDefaultPermissionsOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal` <a name="put_principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal"></a>

```python
def put_principal(
  value: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissionsPrincipal]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>]

---

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a>

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principalInput"></a>

```python
principal_input: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissionsPrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogCreateDatabaseDefaultPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>

---


### GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCatalogCreateDatabaseDefaultPermissionsPrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>]

---


### GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">reset_data_lake_principal_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_lake_principal_identifier` <a name="reset_data_lake_principal_identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```python
def reset_data_lake_principal_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">data_lake_principal_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier_input`<sup>Optional</sup> <a name="data_lake_principal_identifier_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```python
data_lake_principal_identifier_input: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogCreateDatabaseDefaultPermissionsPrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---


### GlueCatalogCreateTableDefaultPermissionsList <a name="GlueCatalogCreateTableDefaultPermissionsList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateTableDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>]

---


### GlueCatalogCreateTableDefaultPermissionsOutputReference <a name="GlueCatalogCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal` <a name="put_principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal"></a>

```python
def put_principal(
  value: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissionsPrincipal]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>]

---

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList">GlueCatalogCreateTableDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: GlueCatalogCreateTableDefaultPermissionsPrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList">GlueCatalogCreateTableDefaultPermissionsPrincipalList</a>

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```python
principal_input: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissionsPrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogCreateTableDefaultPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>

---


### GlueCatalogCreateTableDefaultPermissionsPrincipalList <a name="GlueCatalogCreateTableDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCatalogCreateTableDefaultPermissionsPrincipal]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>]

---


### GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference <a name="GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">reset_data_lake_principal_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_lake_principal_identifier` <a name="reset_data_lake_principal_identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```python
def reset_data_lake_principal_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">data_lake_principal_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier_input`<sup>Optional</sup> <a name="data_lake_principal_identifier_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```python
data_lake_principal_identifier_input: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogCreateTableDefaultPermissionsPrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---


### GlueCatalogFederatedCatalogList <a name="GlueCatalogFederatedCatalogList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogFederatedCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogFederatedCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCatalogFederatedCatalog]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>]

---


### GlueCatalogFederatedCatalogOutputReference <a name="GlueCatalogFederatedCatalogOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogFederatedCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetIdentifier">reset_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetIdentifier"></a>

```python
def reset_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogFederatedCatalog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>

---


### GlueCatalogTargetRedshiftCatalogList <a name="GlueCatalogTargetRedshiftCatalogList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogTargetRedshiftCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogTargetRedshiftCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueCatalogTargetRedshiftCatalog]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>]

---


### GlueCatalogTargetRedshiftCatalogOutputReference <a name="GlueCatalogTargetRedshiftCatalogOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArnInput">catalog_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn">catalog_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_arn_input`<sup>Optional</sup> <a name="catalog_arn_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArnInput"></a>

```python
catalog_arn_input: str
```

- *Type:* str

---

##### `catalog_arn`<sup>Required</sup> <a name="catalog_arn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn"></a>

```python
catalog_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogTargetRedshiftCatalog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>

---


### GlueCatalogTimeoutsOutputReference <a name="GlueCatalogTimeoutsOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_aws import glue_catalog

glueCatalog.GlueCatalogTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueCatalogTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a>

---



