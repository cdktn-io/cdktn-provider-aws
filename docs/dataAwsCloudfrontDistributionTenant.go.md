# `dataAwsCloudfrontDistributionTenant` Submodule <a name="`dataAwsCloudfrontDistributionTenant` Submodule" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontDistributionTenant <a name="DataAwsCloudfrontDistributionTenant" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant aws_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenant(scope Construct, id *string, config DataAwsCloudfrontDistributionTenantConfig) DataAwsCloudfrontDistributionTenant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig">DataAwsCloudfrontDistributionTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig">DataAwsCloudfrontDistributionTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetArn"></a>

```go
func ResetArn()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsCloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenant_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsCloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsCloudfrontDistributionTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsCloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.connectionGroupId">ConnectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.customizations">Customizations</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList">DataAwsCloudfrontDistributionTenantCustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.distributionId">DistributionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domains">Domains</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList">DataAwsCloudfrontDistributionTenantDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.managedCertificateRequest">ManagedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList">DataAwsCloudfrontDistributionTenantManagedCertificateRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList">DataAwsCloudfrontDistributionTenantParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ConnectionGroupId`<sup>Required</sup> <a name="ConnectionGroupId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.connectionGroupId"></a>

```go
func ConnectionGroupId() *string
```

- *Type:* *string

---

##### `Customizations`<sup>Required</sup> <a name="Customizations" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.customizations"></a>

```go
func Customizations() DataAwsCloudfrontDistributionTenantCustomizationsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList">DataAwsCloudfrontDistributionTenantCustomizationsList</a>

---

##### `DistributionId`<sup>Required</sup> <a name="DistributionId" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.distributionId"></a>

```go
func DistributionId() *string
```

- *Type:* *string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domains"></a>

```go
func Domains() DataAwsCloudfrontDistributionTenantDomainsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList">DataAwsCloudfrontDistributionTenantDomainsList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ManagedCertificateRequest`<sup>Required</sup> <a name="ManagedCertificateRequest" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```go
func ManagedCertificateRequest() DataAwsCloudfrontDistributionTenantManagedCertificateRequestList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList">DataAwsCloudfrontDistributionTenantManagedCertificateRequestList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.parameters"></a>

```go
func Parameters() DataAwsCloudfrontDistributionTenantParametersList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList">DataAwsCloudfrontDistributionTenantParametersList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontDistributionTenantConfig <a name="DataAwsCloudfrontDistributionTenantConfig" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

&dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Domain: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#arn DataAwsCloudfrontDistributionTenant#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#domain DataAwsCloudfrontDistributionTenant#domain}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsCloudfrontDistributionTenant#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#name DataAwsCloudfrontDistributionTenant#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#arn DataAwsCloudfrontDistributionTenant#arn}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#domain DataAwsCloudfrontDistributionTenant#domain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsCloudfrontDistributionTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution_tenant#name DataAwsCloudfrontDistributionTenant#name}.

---

### DataAwsCloudfrontDistributionTenantCustomizations <a name="DataAwsCloudfrontDistributionTenantCustomizations" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

&dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenantCustomizations {

}
```


### DataAwsCloudfrontDistributionTenantCustomizationsCertificate <a name="DataAwsCloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

&dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate {

}
```


### DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction <a name="DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

&dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction {

}
```


### DataAwsCloudfrontDistributionTenantCustomizationsWebAcl <a name="DataAwsCloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

&dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl {

}
```


### DataAwsCloudfrontDistributionTenantDomains <a name="DataAwsCloudfrontDistributionTenantDomains" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

&dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenantDomains {

}
```


### DataAwsCloudfrontDistributionTenantManagedCertificateRequest <a name="DataAwsCloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

&dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest {

}
```


### DataAwsCloudfrontDistributionTenantParameters <a name="DataAwsCloudfrontDistributionTenantParameters" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

&dataawscloudfrontdistributiontenant.DataAwsCloudfrontDistributionTenantParameters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontDistributionTenantCustomizationsCertificateList <a name="DataAwsCloudfrontDistributionTenantCustomizationsCertificateList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantCustomizationsCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontDistributionTenantCustomizationsCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate">DataAwsCloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontDistributionTenantCustomizationsCertificate
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificate">DataAwsCloudfrontDistributionTenantCustomizationsCertificate</a>

---


### DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList <a name="DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType">RestrictionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictionType`<sup>Required</sup> <a name="RestrictionType" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType"></a>

```go
func RestrictionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestriction</a>

---


### DataAwsCloudfrontDistributionTenantCustomizationsList <a name="DataAwsCloudfrontDistributionTenantCustomizationsList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantCustomizationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontDistributionTenantCustomizationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontDistributionTenantCustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontDistributionTenantCustomizationsOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantCustomizationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontDistributionTenantCustomizationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList">DataAwsCloudfrontDistributionTenantCustomizationsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction">GeoRestriction</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">WebAcl</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList">DataAwsCloudfrontDistributionTenantCustomizationsWebAclList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations">DataAwsCloudfrontDistributionTenantCustomizations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```go
func Certificate() DataAwsCloudfrontDistributionTenantCustomizationsCertificateList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsCertificateList">DataAwsCloudfrontDistributionTenantCustomizationsCertificateList</a>

---

##### `GeoRestriction`<sup>Required</sup> <a name="GeoRestriction" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction"></a>

```go
func GeoRestriction() DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList">DataAwsCloudfrontDistributionTenantCustomizationsGeoRestrictionList</a>

---

##### `WebAcl`<sup>Required</sup> <a name="WebAcl" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```go
func WebAcl() DataAwsCloudfrontDistributionTenantCustomizationsWebAclList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList">DataAwsCloudfrontDistributionTenantCustomizationsWebAclList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontDistributionTenantCustomizations
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizations">DataAwsCloudfrontDistributionTenantCustomizations</a>

---


### DataAwsCloudfrontDistributionTenantCustomizationsWebAclList <a name="DataAwsCloudfrontDistributionTenantCustomizationsWebAclList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantCustomizationsWebAclList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontDistributionTenantCustomizationsWebAclList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsCloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontDistributionTenantCustomizationsWebAcl
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsCloudfrontDistributionTenantCustomizationsWebAcl</a>

---


### DataAwsCloudfrontDistributionTenantDomainsList <a name="DataAwsCloudfrontDistributionTenantDomainsList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontDistributionTenantDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontDistributionTenantDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontDistributionTenantDomainsOutputReference <a name="DataAwsCloudfrontDistributionTenantDomainsOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontDistributionTenantDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains">DataAwsCloudfrontDistributionTenantDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontDistributionTenantDomains
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantDomains">DataAwsCloudfrontDistributionTenantDomains</a>

---


### DataAwsCloudfrontDistributionTenantManagedCertificateRequestList <a name="DataAwsCloudfrontDistributionTenantManagedCertificateRequestList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantManagedCertificateRequestList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontDistributionTenantManagedCertificateRequestList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">CertificateTransparencyLoggingPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">PrimaryDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">ValidationTokenHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest">DataAwsCloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateTransparencyLoggingPreference`<sup>Required</sup> <a name="CertificateTransparencyLoggingPreference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```go
func CertificateTransparencyLoggingPreference() *string
```

- *Type:* *string

---

##### `PrimaryDomainName`<sup>Required</sup> <a name="PrimaryDomainName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```go
func PrimaryDomainName() *string
```

- *Type:* *string

---

##### `ValidationTokenHost`<sup>Required</sup> <a name="ValidationTokenHost" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```go
func ValidationTokenHost() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontDistributionTenantManagedCertificateRequest
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantManagedCertificateRequest">DataAwsCloudfrontDistributionTenantManagedCertificateRequest</a>

---


### DataAwsCloudfrontDistributionTenantParametersList <a name="DataAwsCloudfrontDistributionTenantParametersList" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudfrontDistributionTenantParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.get"></a>

```go
func Get(index *f64) DataAwsCloudfrontDistributionTenantParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudfrontDistributionTenantParametersOutputReference <a name="DataAwsCloudfrontDistributionTenantParametersOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/dataawscloudfrontdistributiontenant"

dataawscloudfrontdistributiontenant.NewDataAwsCloudfrontDistributionTenantParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudfrontDistributionTenantParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters">DataAwsCloudfrontDistributionTenantParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudfrontDistributionTenantParameters
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontDistributionTenant.DataAwsCloudfrontDistributionTenantParameters">DataAwsCloudfrontDistributionTenantParameters</a>

---



