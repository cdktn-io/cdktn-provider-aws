# `dataAwsS3ControlMultiRegionAccessPoints` Submodule <a name="`dataAwsS3ControlMultiRegionAccessPoints` Submodule" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlMultiRegionAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points aws_s3control_multi_region_access_points}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.NewDataAwsS3ControlMultiRegionAccessPoints(scope Construct, id *string, config DataAwsS3ControlMultiRegionAccessPointsConfig) DataAwsS3ControlMultiRegionAccessPoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig">DataAwsS3ControlMultiRegionAccessPointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig">DataAwsS3ControlMultiRegionAccessPointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.DataAwsS3ControlMultiRegionAccessPoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.DataAwsS3ControlMultiRegionAccessPoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.DataAwsS3ControlMultiRegionAccessPoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.DataAwsS3ControlMultiRegionAccessPoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsS3ControlMultiRegionAccessPoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsS3ControlMultiRegionAccessPoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsS3ControlMultiRegionAccessPoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints">AccessPoints</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessPoints`<sup>Required</sup> <a name="AccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints"></a>

```go
func AccessPoints() DataAwsS3ControlMultiRegionAccessPointsAccessPointsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

&dataawss3controlmultiregionaccesspoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints {

}
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

&dataawss3controlmultiregionaccesspoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock {

}
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

&dataawss3controlmultiregionaccesspoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions {

}
```


### DataAwsS3ControlMultiRegionAccessPointsConfig <a name="DataAwsS3ControlMultiRegionAccessPointsConfig" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

&dataawss3controlmultiregionaccesspoints.DataAwsS3ControlMultiRegionAccessPointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#region DataAwsS3ControlMultiRegionAccessPoints#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPointsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.NewDataAwsS3ControlMultiRegionAccessPointsAccessPointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsS3ControlMultiRegionAccessPointsAccessPointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get"></a>

```go
func Get(index *f64) DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.NewDataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock">PublicAccessBlock</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions">Regions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicAccessBlock`<sup>Required</sup> <a name="PublicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock"></a>

```go
func PublicAccessBlock() DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions"></a>

```go
func Regions() DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsS3ControlMultiRegionAccessPointsAccessPoints
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.NewDataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get"></a>

```go
func Get(index *f64) DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.NewDataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```go
func BlockPublicAcls() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```go
func BlockPublicPolicy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```go
func IgnorePublicAcls() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```go
func RestrictPublicBuckets() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.NewDataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get"></a>

```go
func Get(index *f64) DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawss3controlmultiregionaccesspoints"

dataawss3controlmultiregionaccesspoints.NewDataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId">BucketAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId"></a>

```go
func BucketAccountId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a>

---



