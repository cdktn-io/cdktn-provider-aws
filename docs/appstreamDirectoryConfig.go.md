# `appstreamDirectoryConfig` Submodule <a name="`appstreamDirectoryConfig` Submodule" id="@cdktn/provider-aws.appstreamDirectoryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamDirectoryConfig <a name="AppstreamDirectoryConfig" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config aws_appstream_directory_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

appstreamdirectoryconfig.NewAppstreamDirectoryConfig(scope Construct, id *string, config AppstreamDirectoryConfigConfig) AppstreamDirectoryConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig">AppstreamDirectoryConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig">AppstreamDirectoryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putCertificateBasedAuthProperties">PutCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials">PutServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetCertificateBasedAuthProperties">ResetCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificateBasedAuthProperties` <a name="PutCertificateBasedAuthProperties" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putCertificateBasedAuthProperties"></a>

```go
func PutCertificateBasedAuthProperties(value AppstreamDirectoryConfigCertificateBasedAuthProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putCertificateBasedAuthProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a>

---

##### `PutServiceAccountCredentials` <a name="PutServiceAccountCredentials" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials"></a>

```go
func PutServiceAccountCredentials(value AppstreamDirectoryConfigServiceAccountCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `ResetCertificateBasedAuthProperties` <a name="ResetCertificateBasedAuthProperties" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetCertificateBasedAuthProperties"></a>

```go
func ResetCertificateBasedAuthProperties()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppstreamDirectoryConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

appstreamdirectoryconfig.AppstreamDirectoryConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

appstreamdirectoryconfig.AppstreamDirectoryConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

appstreamdirectoryconfig.AppstreamDirectoryConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

appstreamdirectoryconfig.AppstreamDirectoryConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppstreamDirectoryConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppstreamDirectoryConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppstreamDirectoryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppstreamDirectoryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.certificateBasedAuthProperties">CertificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference">AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials">ServiceAccountCredentials</a></code> | <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.certificateBasedAuthPropertiesInput">CertificateBasedAuthPropertiesInput</a></code> | <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput">DirectoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput">OrganizationalUnitDistinguishedNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput">ServiceAccountCredentialsInput</a></code> | <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName">DirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames">OrganizationalUnitDistinguishedNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateBasedAuthProperties`<sup>Required</sup> <a name="CertificateBasedAuthProperties" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.certificateBasedAuthProperties"></a>

```go
func CertificateBasedAuthProperties() AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference">AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference</a>

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `ServiceAccountCredentials`<sup>Required</sup> <a name="ServiceAccountCredentials" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials"></a>

```go
func ServiceAccountCredentials() AppstreamDirectoryConfigServiceAccountCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a>

---

##### `CertificateBasedAuthPropertiesInput`<sup>Optional</sup> <a name="CertificateBasedAuthPropertiesInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.certificateBasedAuthPropertiesInput"></a>

```go
func CertificateBasedAuthPropertiesInput() AppstreamDirectoryConfigCertificateBasedAuthProperties
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a>

---

##### `DirectoryNameInput`<sup>Optional</sup> <a name="DirectoryNameInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput"></a>

```go
func DirectoryNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedNamesInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNamesInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput"></a>

```go
func OrganizationalUnitDistinguishedNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceAccountCredentialsInput`<sup>Optional</sup> <a name="ServiceAccountCredentialsInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput"></a>

```go
func ServiceAccountCredentialsInput() AppstreamDirectoryConfigServiceAccountCredentials
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName"></a>

```go
func DirectoryName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedNames`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedNames" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames"></a>

```go
func OrganizationalUnitDistinguishedNames() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamDirectoryConfigCertificateBasedAuthProperties <a name="AppstreamDirectoryConfigCertificateBasedAuthProperties" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

&appstreamdirectoryconfig.AppstreamDirectoryConfigCertificateBasedAuthProperties {
	CertificateAuthorityArn: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#certificate_authority_arn AppstreamDirectoryConfig#certificate_authority_arn}. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#status AppstreamDirectoryConfig#status}. |

---

##### `CertificateAuthorityArn`<sup>Optional</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.property.certificateAuthorityArn"></a>

```go
CertificateAuthorityArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#certificate_authority_arn AppstreamDirectoryConfig#certificate_authority_arn}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#status AppstreamDirectoryConfig#status}.

---

### AppstreamDirectoryConfigConfig <a name="AppstreamDirectoryConfigConfig" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

&appstreamdirectoryconfig.AppstreamDirectoryConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DirectoryName: *string,
	OrganizationalUnitDistinguishedNames: *[]*string,
	ServiceAccountCredentials: github.com/cdktn-io/cdktn-provider-aws-go/aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials,
	CertificateBasedAuthProperties: github.com/cdktn-io/cdktn-provider-aws-go/aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties,
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName">DirectoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames">OrganizationalUnitDistinguishedNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials">ServiceAccountCredentials</a></code> | <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.certificateBasedAuthProperties">CertificateBasedAuthProperties</a></code> | <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a></code> | certificate_based_auth_properties block. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#id AppstreamDirectoryConfig#id}. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName"></a>

```go
DirectoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}.

---

##### `OrganizationalUnitDistinguishedNames`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedNames" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames"></a>

```go
OrganizationalUnitDistinguishedNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}.

---

##### `ServiceAccountCredentials`<sup>Required</sup> <a name="ServiceAccountCredentials" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials"></a>

```go
ServiceAccountCredentials AppstreamDirectoryConfigServiceAccountCredentials
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}

---

##### `CertificateBasedAuthProperties`<sup>Optional</sup> <a name="CertificateBasedAuthProperties" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.certificateBasedAuthProperties"></a>

```go
CertificateBasedAuthProperties AppstreamDirectoryConfigCertificateBasedAuthProperties
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a>

certificate_based_auth_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#certificate_based_auth_properties AppstreamDirectoryConfig#certificate_based_auth_properties}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#id AppstreamDirectoryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#region AppstreamDirectoryConfig#region}

---

### AppstreamDirectoryConfigServiceAccountCredentials <a name="AppstreamDirectoryConfigServiceAccountCredentials" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

&appstreamdirectoryconfig.AppstreamDirectoryConfigServiceAccountCredentials {
	AccountName: *string,
	AccountPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword">AccountPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}. |

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}.

---

##### `AccountPassword`<sup>Required</sup> <a name="AccountPassword" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword"></a>

```go
AccountPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference <a name="AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

appstreamdirectoryconfig.NewAppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn">ResetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityArn` <a name="ResetCertificateAuthorityArn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resetCertificateAuthorityArn"></a>

```go
func ResetCertificateAuthorityArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArnInput"></a>

```go
func CertificateAuthorityArnInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.certificateAuthorityArn"></a>

```go
func CertificateAuthorityArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() AppstreamDirectoryConfigCertificateBasedAuthProperties
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigCertificateBasedAuthProperties">AppstreamDirectoryConfigCertificateBasedAuthProperties</a>

---


### AppstreamDirectoryConfigServiceAccountCredentialsOutputReference <a name="AppstreamDirectoryConfigServiceAccountCredentialsOutputReference" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/appstreamdirectoryconfig"

appstreamdirectoryconfig.NewAppstreamDirectoryConfigServiceAccountCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppstreamDirectoryConfigServiceAccountCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput">AccountPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword">AccountPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `AccountPasswordInput`<sup>Optional</sup> <a name="AccountPasswordInput" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput"></a>

```go
func AccountPasswordInput() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `AccountPassword`<sup>Required</sup> <a name="AccountPassword" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword"></a>

```go
func AccountPassword() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppstreamDirectoryConfigServiceAccountCredentials
```

- *Type:* <a href="#@cdktn/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---



