# `dataAwsS3FilesAccessPoint` Submodule <a name="`dataAwsS3FilesAccessPoint` Submodule" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3FilesAccessPoint <a name="DataAwsS3FilesAccessPoint" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/s3files_access_point aws_s3files_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.NewDataAwsS3FilesAccessPoint(scope Construct, id *string, config DataAwsS3FilesAccessPointConfig) DataAwsS3FilesAccessPoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig">DataAwsS3FilesAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig">DataAwsS3FilesAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putPosixUser">PutPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putRootDirectory">PutRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetPosixUser">ResetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRootDirectory">ResetRootDirectory</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPosixUser` <a name="PutPosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putPosixUser"></a>

```go
func PutPosixUser(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRootDirectory` <a name="PutRootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putRootDirectory"></a>

```go
func PutRootDirectory(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPosixUser` <a name="ResetPosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetPosixUser"></a>

```go
func ResetPosixUser()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRootDirectory` <a name="ResetRootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRootDirectory"></a>

```go
func ResetRootDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3FilesAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.DataAwsS3FilesAccessPoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.DataAwsS3FilesAccessPoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.DataAwsS3FilesAccessPoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.DataAwsS3FilesAccessPoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsS3FilesAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsS3FilesAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsS3FilesAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/s3files_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3FilesAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList">DataAwsS3FilesAccessPointPosixUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectory">RootDirectory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList">DataAwsS3FilesAccessPointRootDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUserInput">PosixUserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUser"></a>

```go
func PosixUser() DataAwsS3FilesAccessPointPosixUserList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList">DataAwsS3FilesAccessPointPosixUserList</a>

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectory"></a>

```go
func RootDirectory() DataAwsS3FilesAccessPointRootDirectoryList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList">DataAwsS3FilesAccessPointRootDirectoryList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PosixUserInput`<sup>Optional</sup> <a name="PosixUserInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUserInput"></a>

```go
func PosixUserInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectoryInput"></a>

```go
func RootDirectoryInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3FilesAccessPointConfig <a name="DataAwsS3FilesAccessPointConfig" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

&dataawss3filesaccesspoint.DataAwsS3FilesAccessPointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	PosixUser: interface{},
	Region: *string,
	RootDirectory: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.id">Id</a></code> | <code>*string</code> | Access point ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.posixUser">PosixUser</a></code> | <code>interface{}</code> | posix_user block. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.rootDirectory">RootDirectory</a></code> | <code>interface{}</code> | root_directory block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Access point ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/s3files_access_point#id DataAwsS3FilesAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PosixUser`<sup>Optional</sup> <a name="PosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.posixUser"></a>

```go
PosixUser interface{}
```

- *Type:* interface{}

posix_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/s3files_access_point#posix_user DataAwsS3FilesAccessPoint#posix_user}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/s3files_access_point#region DataAwsS3FilesAccessPoint#region}

---

##### `RootDirectory`<sup>Optional</sup> <a name="RootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.rootDirectory"></a>

```go
RootDirectory interface{}
```

- *Type:* interface{}

root_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/s3files_access_point#root_directory DataAwsS3FilesAccessPoint#root_directory}

---

### DataAwsS3FilesAccessPointPosixUser <a name="DataAwsS3FilesAccessPointPosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

&dataawss3filesaccesspoint.DataAwsS3FilesAccessPointPosixUser {

}
```


### DataAwsS3FilesAccessPointRootDirectory <a name="DataAwsS3FilesAccessPointRootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

&dataawss3filesaccesspoint.DataAwsS3FilesAccessPointRootDirectory {
	CreationPermissions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory.property.creationPermissions">CreationPermissions</a></code> | <code>interface{}</code> | creation_permissions block. |

---

##### `CreationPermissions`<sup>Optional</sup> <a name="CreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory.property.creationPermissions"></a>

```go
CreationPermissions interface{}
```

- *Type:* interface{}

creation_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/data-sources/s3files_access_point#creation_permissions DataAwsS3FilesAccessPoint#creation_permissions}

---

### DataAwsS3FilesAccessPointRootDirectoryCreationPermissions <a name="DataAwsS3FilesAccessPointRootDirectoryCreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

&dataawss3filesaccesspoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3FilesAccessPointPosixUserList <a name="DataAwsS3FilesAccessPointPosixUserList" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.NewDataAwsS3FilesAccessPointPosixUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsS3FilesAccessPointPosixUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.get"></a>

```go
func Get(index *f64) DataAwsS3FilesAccessPointPosixUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsS3FilesAccessPointPosixUserOutputReference <a name="DataAwsS3FilesAccessPointPosixUserOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.NewDataAwsS3FilesAccessPointPosixUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsS3FilesAccessPointPosixUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.gid">Gid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.secondaryGids">SecondaryGids</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.uid">Uid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.gid"></a>

```go
func Gid() *f64
```

- *Type:* *f64

---

##### `SecondaryGids`<sup>Required</sup> <a name="SecondaryGids" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```go
func SecondaryGids() *[]*f64
```

- *Type:* *[]*f64

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.uid"></a>

```go
func Uid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList <a name="DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.NewDataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.get"></a>

```go
func Get(index *f64) DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference <a name="DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.NewDataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid">OwnerGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid">OwnerUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OwnerGid`<sup>Required</sup> <a name="OwnerGid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid"></a>

```go
func OwnerGid() *f64
```

- *Type:* *f64

---

##### `OwnerUid`<sup>Required</sup> <a name="OwnerUid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid"></a>

```go
func OwnerUid() *f64
```

- *Type:* *f64

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsS3FilesAccessPointRootDirectoryList <a name="DataAwsS3FilesAccessPointRootDirectoryList" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.NewDataAwsS3FilesAccessPointRootDirectoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsS3FilesAccessPointRootDirectoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.get"></a>

```go
func Get(index *f64) DataAwsS3FilesAccessPointRootDirectoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsS3FilesAccessPointRootDirectoryOutputReference <a name="DataAwsS3FilesAccessPointRootDirectoryOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v23/dataawss3filesaccesspoint"

dataawss3filesaccesspoint.NewDataAwsS3FilesAccessPointRootDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsS3FilesAccessPointRootDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions">PutCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions">ResetCreationPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCreationPermissions` <a name="PutCreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions"></a>

```go
func PutCreationPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreationPermissions` <a name="ResetCreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions"></a>

```go
func ResetCreationPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions">CreationPermissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList">DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput">CreationPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreationPermissions`<sup>Required</sup> <a name="CreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions"></a>

```go
func CreationPermissions() DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList">DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `CreationPermissionsInput`<sup>Optional</sup> <a name="CreationPermissionsInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput"></a>

```go
func CreationPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



