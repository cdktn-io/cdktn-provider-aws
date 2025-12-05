# `dataAwsOdbDbSystemShapes` Submodule <a name="`dataAwsOdbDbSystemShapes` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbSystemShapes <a name="DataAwsOdbDbSystemShapes" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/odb_db_system_shapes aws_odb_db_system_shapes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbdbsystemshapes"

dataawsodbdbsystemshapes.NewDataAwsOdbDbSystemShapes(scope Construct, id *string, config DataAwsOdbDbSystemShapesConfig) DataAwsOdbDbSystemShapes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig">DataAwsOdbDbSystemShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig">DataAwsOdbDbSystemShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetAvailabilityZoneId"></a>

```go
func ResetAvailabilityZoneId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbDbSystemShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbdbsystemshapes"

dataawsodbdbsystemshapes.DataAwsOdbDbSystemShapes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbdbsystemshapes"

dataawsodbdbsystemshapes.DataAwsOdbDbSystemShapes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbdbsystemshapes"

dataawsodbdbsystemshapes.DataAwsOdbDbSystemShapes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbdbsystemshapes"

dataawsodbdbsystemshapes.DataAwsOdbDbSystemShapes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsOdbDbSystemShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsOdbDbSystemShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsOdbDbSystemShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/odb_db_system_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbSystemShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dbSystemShapes">DbSystemShapes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList">DataAwsOdbDbSystemShapesDbSystemShapesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DbSystemShapes`<sup>Required</sup> <a name="DbSystemShapes" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dbSystemShapes"></a>

```go
func DbSystemShapes() DataAwsOdbDbSystemShapesDbSystemShapesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList">DataAwsOdbDbSystemShapesDbSystemShapesList</a>

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneIdInput"></a>

```go
func AvailabilityZoneIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbSystemShapesConfig <a name="DataAwsOdbDbSystemShapesConfig" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbdbsystemshapes"

&dataawsodbdbsystemshapes.DataAwsOdbDbSystemShapesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZoneId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | The physical ID of the AZ, for example, use1-az4. This ID persists across accounts. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.availabilityZoneId"></a>

```go
AvailabilityZoneId *string
```

- *Type:* *string

The physical ID of the AZ, for example, use1-az4. This ID persists across accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/odb_db_system_shapes#availability_zone_id DataAwsOdbDbSystemShapes#availability_zone_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/data-sources/odb_db_system_shapes#region DataAwsOdbDbSystemShapes#region}

---

### DataAwsOdbDbSystemShapesDbSystemShapes <a name="DataAwsOdbDbSystemShapesDbSystemShapes" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbdbsystemshapes"

&dataawsodbdbsystemshapes.DataAwsOdbDbSystemShapesDbSystemShapes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbSystemShapesDbSystemShapesList <a name="DataAwsOdbDbSystemShapesDbSystemShapesList" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbdbsystemshapes"

dataawsodbdbsystemshapes.NewDataAwsOdbDbSystemShapesDbSystemShapesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOdbDbSystemShapesDbSystemShapesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.get"></a>

```go
func Get(index *f64) DataAwsOdbDbSystemShapesDbSystemShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOdbDbSystemShapesDbSystemShapesOutputReference <a name="DataAwsOdbDbSystemShapesDbSystemShapesOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsodbdbsystemshapes"

dataawsodbdbsystemshapes.NewDataAwsOdbDbSystemShapesDbSystemShapesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOdbDbSystemShapesDbSystemShapesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount">AvailableCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode">AvailableCoreCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs">AvailableDataStorageInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs">AvailableDataStoragePerServerInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs">AvailableDbNodePerNodeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs">AvailableDbNodeStorageInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs">AvailableMemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs">AvailableMemoryPerNodeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement">CoreCountIncrement</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount">MaximumNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maxStorageCount">MaxStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minCoreCountPerNode">MinCoreCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDataStorageInTbs">MinDataStorageInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDbNodeStoragePerNodeInGbs">MinDbNodeStoragePerNodeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount">MinimumCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount">MinimumNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minMemoryPerNodeInGbs">MinMemoryPerNodeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minStorageCount">MinStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount">RuntimeMinimumCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily">ShapeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeType">ShapeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes">DataAwsOdbDbSystemShapesDbSystemShapes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableCoreCount`<sup>Required</sup> <a name="AvailableCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount"></a>

```go
func AvailableCoreCount() *f64
```

- *Type:* *f64

---

##### `AvailableCoreCountPerNode`<sup>Required</sup> <a name="AvailableCoreCountPerNode" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode"></a>

```go
func AvailableCoreCountPerNode() *f64
```

- *Type:* *f64

---

##### `AvailableDataStorageInTbs`<sup>Required</sup> <a name="AvailableDataStorageInTbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs"></a>

```go
func AvailableDataStorageInTbs() *f64
```

- *Type:* *f64

---

##### `AvailableDataStoragePerServerInTbs`<sup>Required</sup> <a name="AvailableDataStoragePerServerInTbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs"></a>

```go
func AvailableDataStoragePerServerInTbs() *f64
```

- *Type:* *f64

---

##### `AvailableDbNodePerNodeInGbs`<sup>Required</sup> <a name="AvailableDbNodePerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs"></a>

```go
func AvailableDbNodePerNodeInGbs() *f64
```

- *Type:* *f64

---

##### `AvailableDbNodeStorageInGbs`<sup>Required</sup> <a name="AvailableDbNodeStorageInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs"></a>

```go
func AvailableDbNodeStorageInGbs() *f64
```

- *Type:* *f64

---

##### `AvailableMemoryInGbs`<sup>Required</sup> <a name="AvailableMemoryInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs"></a>

```go
func AvailableMemoryInGbs() *f64
```

- *Type:* *f64

---

##### `AvailableMemoryPerNodeInGbs`<sup>Required</sup> <a name="AvailableMemoryPerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs"></a>

```go
func AvailableMemoryPerNodeInGbs() *f64
```

- *Type:* *f64

---

##### `CoreCountIncrement`<sup>Required</sup> <a name="CoreCountIncrement" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement"></a>

```go
func CoreCountIncrement() *f64
```

- *Type:* *f64

---

##### `MaximumNodeCount`<sup>Required</sup> <a name="MaximumNodeCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount"></a>

```go
func MaximumNodeCount() *f64
```

- *Type:* *f64

---

##### `MaxStorageCount`<sup>Required</sup> <a name="MaxStorageCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maxStorageCount"></a>

```go
func MaxStorageCount() *f64
```

- *Type:* *f64

---

##### `MinCoreCountPerNode`<sup>Required</sup> <a name="MinCoreCountPerNode" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minCoreCountPerNode"></a>

```go
func MinCoreCountPerNode() *f64
```

- *Type:* *f64

---

##### `MinDataStorageInTbs`<sup>Required</sup> <a name="MinDataStorageInTbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDataStorageInTbs"></a>

```go
func MinDataStorageInTbs() *f64
```

- *Type:* *f64

---

##### `MinDbNodeStoragePerNodeInGbs`<sup>Required</sup> <a name="MinDbNodeStoragePerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDbNodeStoragePerNodeInGbs"></a>

```go
func MinDbNodeStoragePerNodeInGbs() *f64
```

- *Type:* *f64

---

##### `MinimumCoreCount`<sup>Required</sup> <a name="MinimumCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount"></a>

```go
func MinimumCoreCount() *f64
```

- *Type:* *f64

---

##### `MinimumNodeCount`<sup>Required</sup> <a name="MinimumNodeCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount"></a>

```go
func MinimumNodeCount() *f64
```

- *Type:* *f64

---

##### `MinMemoryPerNodeInGbs`<sup>Required</sup> <a name="MinMemoryPerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minMemoryPerNodeInGbs"></a>

```go
func MinMemoryPerNodeInGbs() *f64
```

- *Type:* *f64

---

##### `MinStorageCount`<sup>Required</sup> <a name="MinStorageCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minStorageCount"></a>

```go
func MinStorageCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuntimeMinimumCoreCount`<sup>Required</sup> <a name="RuntimeMinimumCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount"></a>

```go
func RuntimeMinimumCoreCount() *f64
```

- *Type:* *f64

---

##### `ShapeFamily`<sup>Required</sup> <a name="ShapeFamily" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily"></a>

```go
func ShapeFamily() *string
```

- *Type:* *string

---

##### `ShapeType`<sup>Required</sup> <a name="ShapeType" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeType"></a>

```go
func ShapeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOdbDbSystemShapesDbSystemShapes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes">DataAwsOdbDbSystemShapesDbSystemShapes</a>

---



