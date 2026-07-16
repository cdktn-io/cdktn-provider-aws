# `dataAwsGlueCatalog` Submodule <a name="`dataAwsGlueCatalog` Submodule" id="@cdktn/provider-aws.dataAwsGlueCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueCatalog <a name="DataAwsGlueCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/glue_catalog aws_glue_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalog(scope Construct, id *string, config DataAwsGlueCatalogConfig) DataAwsGlueCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig">DataAwsGlueCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig">DataAwsGlueCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsGlueCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.DataAwsGlueCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.DataAwsGlueCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.DataAwsGlueCatalog_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.DataAwsGlueCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsGlueCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsGlueCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsGlueCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/glue_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsGlueCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.allowFullTableExternalDataAccess">AllowFullTableExternalDataAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogProperties">CatalogProperties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList">DataAwsGlueCatalogCatalogPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createDatabaseDefaultPermissions">CreateDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTableDefaultPermissions">CreateTableDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList">DataAwsGlueCatalogCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.federatedCatalog">FederatedCatalog</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList">DataAwsGlueCatalogFederatedCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.parameters">Parameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.targetRedshiftCatalog">TargetRedshiftCatalog</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList">DataAwsGlueCatalogTargetRedshiftCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AllowFullTableExternalDataAccess`<sup>Required</sup> <a name="AllowFullTableExternalDataAccess" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.allowFullTableExternalDataAccess"></a>

```go
func AllowFullTableExternalDataAccess() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `CatalogProperties`<sup>Required</sup> <a name="CatalogProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogProperties"></a>

```go
func CatalogProperties() DataAwsGlueCatalogCatalogPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList">DataAwsGlueCatalogCatalogPropertiesList</a>

---

##### `CreateDatabaseDefaultPermissions`<sup>Required</sup> <a name="CreateDatabaseDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createDatabaseDefaultPermissions"></a>

```go
func CreateDatabaseDefaultPermissions() DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList</a>

---

##### `CreateTableDefaultPermissions`<sup>Required</sup> <a name="CreateTableDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTableDefaultPermissions"></a>

```go
func CreateTableDefaultPermissions() DataAwsGlueCatalogCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList">DataAwsGlueCatalogCreateTableDefaultPermissionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FederatedCatalog`<sup>Required</sup> <a name="FederatedCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.federatedCatalog"></a>

```go
func FederatedCatalog() DataAwsGlueCatalogFederatedCatalogList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList">DataAwsGlueCatalogFederatedCatalogList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TargetRedshiftCatalog`<sup>Required</sup> <a name="TargetRedshiftCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.targetRedshiftCatalog"></a>

```go
func TargetRedshiftCatalog() DataAwsGlueCatalogTargetRedshiftCatalogList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList">DataAwsGlueCatalogTargetRedshiftCatalogList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueCatalogCatalogProperties <a name="DataAwsGlueCatalogCatalogProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogCatalogProperties {

}
```


### DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties <a name="DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties {

}
```


### DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties <a name="DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties {

}
```


### DataAwsGlueCatalogConfig <a name="DataAwsGlueCatalogConfig" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/glue_catalog#name DataAwsGlueCatalog#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/glue_catalog#name DataAwsGlueCatalog#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/glue_catalog#region DataAwsGlueCatalog#region}

---

### DataAwsGlueCatalogCreateDatabaseDefaultPermissions <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions {

}
```


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal {

}
```


### DataAwsGlueCatalogCreateTableDefaultPermissions <a name="DataAwsGlueCatalogCreateTableDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogCreateTableDefaultPermissions {

}
```


### DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal {

}
```


### DataAwsGlueCatalogFederatedCatalog <a name="DataAwsGlueCatalogFederatedCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogFederatedCatalog {

}
```


### DataAwsGlueCatalogTargetRedshiftCatalog <a name="DataAwsGlueCatalogTargetRedshiftCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

&dataawsgluecatalog.DataAwsGlueCatalogTargetRedshiftCatalog {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList <a name="DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference <a name="DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType">CatalogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess">DataLakeAccess</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole">DataTransferRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName">ManagedWorkgroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus">ManagedWorkgroupStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName">RedshiftDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType"></a>

```go
func CatalogType() *string
```

- *Type:* *string

---

##### `DataLakeAccess`<sup>Required</sup> <a name="DataLakeAccess" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess"></a>

```go
func DataLakeAccess() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DataTransferRole`<sup>Required</sup> <a name="DataTransferRole" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole"></a>

```go
func DataTransferRole() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `ManagedWorkgroupName`<sup>Required</sup> <a name="ManagedWorkgroupName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName"></a>

```go
func ManagedWorkgroupName() *string
```

- *Type:* *string

---

##### `ManagedWorkgroupStatus`<sup>Required</sup> <a name="ManagedWorkgroupStatus" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus"></a>

```go
func ManagedWorkgroupStatus() *string
```

- *Type:* *string

---

##### `RedshiftDatabaseName`<sup>Required</sup> <a name="RedshiftDatabaseName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName"></a>

```go
func RedshiftDatabaseName() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---


### DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList <a name="DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference <a name="DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction">Compaction</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion">OrphanFileDeletion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention">Retention</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compaction`<sup>Required</sup> <a name="Compaction" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction"></a>

```go
func Compaction() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `OrphanFileDeletion`<sup>Required</sup> <a name="OrphanFileDeletion" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion"></a>

```go
func OrphanFileDeletion() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention"></a>

```go
func Retention() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>

---


### DataAwsGlueCatalogCatalogPropertiesList <a name="DataAwsGlueCatalogCatalogPropertiesList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCatalogPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogCatalogPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogCatalogPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogCatalogPropertiesOutputReference <a name="DataAwsGlueCatalogCatalogPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCatalogPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogCatalogPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.customProperties">CustomProperties</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties">DataLakeAccessProperties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties">IcebergOptimizationProperties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties">DataAwsGlueCatalogCatalogProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomProperties`<sup>Required</sup> <a name="CustomProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.customProperties"></a>

```go
func CustomProperties() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `DataLakeAccessProperties`<sup>Required</sup> <a name="DataLakeAccessProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties"></a>

```go
func DataLakeAccessProperties() DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a>

---

##### `IcebergOptimizationProperties`<sup>Required</sup> <a name="IcebergOptimizationProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties"></a>

```go
func IcebergOptimizationProperties() DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogCatalogProperties
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties">DataAwsGlueCatalogCatalogProperties</a>

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCreateDatabaseDefaultPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions">DataAwsGlueCatalogCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```go
func Principal() DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogCreateDatabaseDefaultPermissions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions">DataAwsGlueCatalogCreateDatabaseDefaultPermissions</a>

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```go
func DataLakePrincipalIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsList <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCreateTableDefaultPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogCreateTableDefaultPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions">DataAwsGlueCatalogCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```go
func Principal() DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogCreateTableDefaultPermissions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions">DataAwsGlueCatalogCreateTableDefaultPermissions</a>

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```go
func DataLakePrincipalIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---


### DataAwsGlueCatalogFederatedCatalogList <a name="DataAwsGlueCatalogFederatedCatalogList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogFederatedCatalogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogFederatedCatalogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogFederatedCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogFederatedCatalogOutputReference <a name="DataAwsGlueCatalogFederatedCatalogOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogFederatedCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogFederatedCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog">DataAwsGlueCatalogFederatedCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogFederatedCatalog
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog">DataAwsGlueCatalogFederatedCatalog</a>

---


### DataAwsGlueCatalogTargetRedshiftCatalogList <a name="DataAwsGlueCatalogTargetRedshiftCatalogList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogTargetRedshiftCatalogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlueCatalogTargetRedshiftCatalogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.get"></a>

```go
func Get(index *f64) DataAwsGlueCatalogTargetRedshiftCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlueCatalogTargetRedshiftCatalogOutputReference <a name="DataAwsGlueCatalogTargetRedshiftCatalogOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawsgluecatalog"

dataawsgluecatalog.NewDataAwsGlueCatalogTargetRedshiftCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlueCatalogTargetRedshiftCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn">CatalogArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog">DataAwsGlueCatalogTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogArn`<sup>Required</sup> <a name="CatalogArn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn"></a>

```go
func CatalogArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlueCatalogTargetRedshiftCatalog
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog">DataAwsGlueCatalogTargetRedshiftCatalog</a>

---



