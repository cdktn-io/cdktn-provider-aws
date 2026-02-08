# `opensearchApplication` Submodule <a name="`opensearchApplication` Submodule" id="@cdktn/provider-aws.opensearchApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchApplication <a name="OpensearchApplication" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application aws_opensearch_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.NewOpensearchApplication(scope Construct, id *string, config OpensearchApplicationConfig) OpensearchApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig">OpensearchApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig">OpensearchApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putAppConfig">PutAppConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putDataSource">PutDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putIamIdentityCenterOptions">PutIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetAppConfig">ResetAppConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetIamIdentityCenterOptions">ResetIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppConfig` <a name="PutAppConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putAppConfig"></a>

```go
func PutAppConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putAppConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataSource` <a name="PutDataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putDataSource"></a>

```go
func PutDataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putDataSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIamIdentityCenterOptions` <a name="PutIamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putIamIdentityCenterOptions"></a>

```go
func PutIamIdentityCenterOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putIamIdentityCenterOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts"></a>

```go
func PutTimeouts(value OpensearchApplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

---

##### `ResetAppConfig` <a name="ResetAppConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetAppConfig"></a>

```go
func ResetAppConfig()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetDataSource"></a>

```go
func ResetDataSource()
```

##### `ResetIamIdentityCenterOptions` <a name="ResetIamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetIamIdentityCenterOptions"></a>

```go
func ResetIamIdentityCenterOptions()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.OpensearchApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.OpensearchApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.OpensearchApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.OpensearchApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpensearchApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfig">AppConfig</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList">OpensearchApplicationAppConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList">OpensearchApplicationDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptions">IamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList">OpensearchApplicationIamIdentityCenterOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference">OpensearchApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfigInput">AppConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSourceInput">DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptionsInput">IamIdentityCenterOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppConfig`<sup>Required</sup> <a name="AppConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfig"></a>

```go
func AppConfig() OpensearchApplicationAppConfigList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList">OpensearchApplicationAppConfigList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSource"></a>

```go
func DataSource() OpensearchApplicationDataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList">OpensearchApplicationDataSourceList</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `IamIdentityCenterOptions`<sup>Required</sup> <a name="IamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptions"></a>

```go
func IamIdentityCenterOptions() OpensearchApplicationIamIdentityCenterOptionsList
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList">OpensearchApplicationIamIdentityCenterOptionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeouts"></a>

```go
func Timeouts() OpensearchApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference">OpensearchApplicationTimeoutsOutputReference</a>

---

##### `AppConfigInput`<sup>Optional</sup> <a name="AppConfigInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.appConfigInput"></a>

```go
func AppConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.dataSourceInput"></a>

```go
func DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `IamIdentityCenterOptionsInput`<sup>Optional</sup> <a name="IamIdentityCenterOptionsInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.iamIdentityCenterOptionsInput"></a>

```go
func IamIdentityCenterOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchApplicationAppConfig <a name="OpensearchApplicationAppConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

&opensearchapplication.OpensearchApplicationAppConfig {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#key OpensearchApplication#key}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#value OpensearchApplication#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#key OpensearchApplication#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#value OpensearchApplication#value}.

---

### OpensearchApplicationConfig <a name="OpensearchApplicationConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

&opensearchapplication.OpensearchApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AppConfig: interface{},
	DataSource: interface{},
	IamIdentityCenterOptions: interface{},
	KmsKeyArn: *string,
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.opensearchApplication.OpensearchApplicationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#name OpensearchApplication#name}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.appConfig">AppConfig</a></code> | <code>interface{}</code> | app_config block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dataSource">DataSource</a></code> | <code>interface{}</code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.iamIdentityCenterOptions">IamIdentityCenterOptions</a></code> | <code>interface{}</code> | iam_identity_center_options block. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#name OpensearchApplication#name}.

---

##### `AppConfig`<sup>Optional</sup> <a name="AppConfig" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.appConfig"></a>

```go
AppConfig interface{}
```

- *Type:* interface{}

app_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#app_config OpensearchApplication#app_config}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.dataSource"></a>

```go
DataSource interface{}
```

- *Type:* interface{}

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source OpensearchApplication#data_source}

---

##### `IamIdentityCenterOptions`<sup>Optional</sup> <a name="IamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.iamIdentityCenterOptions"></a>

```go
IamIdentityCenterOptions interface{}
```

- *Type:* interface{}

iam_identity_center_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_identity_center_options OpensearchApplication#iam_identity_center_options}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#kms_key_arn OpensearchApplication#kms_key_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#region OpensearchApplication#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#tags OpensearchApplication#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationConfig.property.timeouts"></a>

```go
Timeouts OpensearchApplicationTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts">OpensearchApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#timeouts OpensearchApplication#timeouts}

---

### OpensearchApplicationDataSource <a name="OpensearchApplicationDataSource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

&opensearchapplication.OpensearchApplicationDataSource {
	DataSourceArn: *string,
	DataSourceDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_arn OpensearchApplication#data_source_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceDescription">DataSourceDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_description OpensearchApplication#data_source_description}. |

---

##### `DataSourceArn`<sup>Optional</sup> <a name="DataSourceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceArn"></a>

```go
DataSourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_arn OpensearchApplication#data_source_arn}.

---

##### `DataSourceDescription`<sup>Optional</sup> <a name="DataSourceDescription" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSource.property.dataSourceDescription"></a>

```go
DataSourceDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#data_source_description OpensearchApplication#data_source_description}.

---

### OpensearchApplicationIamIdentityCenterOptions <a name="OpensearchApplicationIamIdentityCenterOptions" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

&opensearchapplication.OpensearchApplicationIamIdentityCenterOptions {
	Enabled: interface{},
	IamIdentityCenterInstanceArn: *string,
	IamRoleForIdentityCenterApplicationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#enabled OpensearchApplication#enabled}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn">IamIdentityCenterInstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_identity_center_instance_arn OpensearchApplication#iam_identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn">IamRoleForIdentityCenterApplicationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_role_for_identity_center_application_arn OpensearchApplication#iam_role_for_identity_center_application_arn}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#enabled OpensearchApplication#enabled}.

---

##### `IamIdentityCenterInstanceArn`<sup>Optional</sup> <a name="IamIdentityCenterInstanceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn"></a>

```go
IamIdentityCenterInstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_identity_center_instance_arn OpensearchApplication#iam_identity_center_instance_arn}.

---

##### `IamRoleForIdentityCenterApplicationArn`<sup>Optional</sup> <a name="IamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn"></a>

```go
IamRoleForIdentityCenterApplicationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#iam_role_for_identity_center_application_arn OpensearchApplication#iam_role_for_identity_center_application_arn}.

---

### OpensearchApplicationTimeouts <a name="OpensearchApplicationTimeouts" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

&opensearchapplication.OpensearchApplicationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#create OpensearchApplication#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#delete OpensearchApplication#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/opensearch_application#update OpensearchApplication#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchApplicationAppConfigList <a name="OpensearchApplicationAppConfigList" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.NewOpensearchApplicationAppConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchApplicationAppConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.get"></a>

```go
func Get(index *f64) OpensearchApplicationAppConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchApplicationAppConfigOutputReference <a name="OpensearchApplicationAppConfigOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.NewOpensearchApplicationAppConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchApplicationAppConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationAppConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchApplicationDataSourceList <a name="OpensearchApplicationDataSourceList" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.NewOpensearchApplicationDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchApplicationDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.get"></a>

```go
func Get(index *f64) OpensearchApplicationDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchApplicationDataSourceOutputReference <a name="OpensearchApplicationDataSourceOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.NewOpensearchApplicationDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchApplicationDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceArn">ResetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceDescription">ResetDataSourceDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSourceArn` <a name="ResetDataSourceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceArn"></a>

```go
func ResetDataSourceArn()
```

##### `ResetDataSourceDescription` <a name="ResetDataSourceDescription" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.resetDataSourceDescription"></a>

```go
func ResetDataSourceDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescriptionInput">DataSourceDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescription">DataSourceDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArnInput"></a>

```go
func DataSourceArnInput() *string
```

- *Type:* *string

---

##### `DataSourceDescriptionInput`<sup>Optional</sup> <a name="DataSourceDescriptionInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescriptionInput"></a>

```go
func DataSourceDescriptionInput() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `DataSourceDescription`<sup>Required</sup> <a name="DataSourceDescription" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.dataSourceDescription"></a>

```go
func DataSourceDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchApplicationIamIdentityCenterOptionsList <a name="OpensearchApplicationIamIdentityCenterOptionsList" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.NewOpensearchApplicationIamIdentityCenterOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchApplicationIamIdentityCenterOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.get"></a>

```go
func Get(index *f64) OpensearchApplicationIamIdentityCenterOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchApplicationIamIdentityCenterOptionsOutputReference <a name="OpensearchApplicationIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.NewOpensearchApplicationIamIdentityCenterOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchApplicationIamIdentityCenterOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn">ResetIamIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn">ResetIamRoleForIdentityCenterApplicationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIamIdentityCenterInstanceArn` <a name="ResetIamIdentityCenterInstanceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn"></a>

```go
func ResetIamIdentityCenterInstanceArn()
```

##### `ResetIamRoleForIdentityCenterApplicationArn` <a name="ResetIamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn"></a>

```go
func ResetIamRoleForIdentityCenterApplicationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterApplicationArn">IamIdentityCenterApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput">IamIdentityCenterInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput">IamRoleForIdentityCenterApplicationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn">IamIdentityCenterInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn">IamRoleForIdentityCenterApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IamIdentityCenterApplicationArn`<sup>Required</sup> <a name="IamIdentityCenterApplicationArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterApplicationArn"></a>

```go
func IamIdentityCenterApplicationArn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IamIdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="IamIdentityCenterInstanceArnInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput"></a>

```go
func IamIdentityCenterInstanceArnInput() *string
```

- *Type:* *string

---

##### `IamRoleForIdentityCenterApplicationArnInput`<sup>Optional</sup> <a name="IamRoleForIdentityCenterApplicationArnInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput"></a>

```go
func IamRoleForIdentityCenterApplicationArnInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IamIdentityCenterInstanceArn`<sup>Required</sup> <a name="IamIdentityCenterInstanceArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn"></a>

```go
func IamIdentityCenterInstanceArn() *string
```

- *Type:* *string

---

##### `IamRoleForIdentityCenterApplicationArn`<sup>Required</sup> <a name="IamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn"></a>

```go
func IamRoleForIdentityCenterApplicationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchApplicationTimeoutsOutputReference <a name="OpensearchApplicationTimeoutsOutputReference" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/opensearchapplication"

opensearchapplication.NewOpensearchApplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchApplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.opensearchApplication.OpensearchApplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



