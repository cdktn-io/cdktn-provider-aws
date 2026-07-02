# `dataAwsS3FilesFileSystem` Submodule <a name="`dataAwsS3FilesFileSystem` Submodule" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3FilesFileSystem <a name="DataAwsS3FilesFileSystem" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3files_file_system aws_s3files_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawss3filesfilesystem"

dataawss3filesfilesystem.NewDataAwsS3FilesFileSystem(scope Construct, id *string, config DataAwsS3FilesFileSystemConfig) DataAwsS3FilesFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig">DataAwsS3FilesFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig">DataAwsS3FilesFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3FilesFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawss3filesfilesystem"

dataawss3filesfilesystem.DataAwsS3FilesFileSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawss3filesfilesystem"

dataawss3filesfilesystem.DataAwsS3FilesFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawss3filesfilesystem"

dataawss3filesfilesystem.DataAwsS3FilesFileSystem_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawss3filesfilesystem"

dataawss3filesfilesystem.DataAwsS3FilesFileSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsS3FilesFileSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsS3FilesFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsS3FilesFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3files_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3FilesFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3FilesFileSystemConfig <a name="DataAwsS3FilesFileSystemConfig" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/dataawss3filesfilesystem"

&dataawss3filesfilesystem.DataAwsS3FilesFileSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.id">Id</a></code> | <code>*string</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3files_file_system#id DataAwsS3FilesFileSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsS3FilesFileSystem.DataAwsS3FilesFileSystemConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3files_file_system#region DataAwsS3FilesFileSystem#region}

---



