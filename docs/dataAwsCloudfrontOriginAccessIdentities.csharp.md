# `dataAwsCloudfrontOriginAccessIdentities` Submodule <a name="`dataAwsCloudfrontOriginAccessIdentities` Submodule" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontOriginAccessIdentities <a name="DataAwsCloudfrontOriginAccessIdentities" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/cloudfront_origin_access_identities aws_cloudfront_origin_access_identities}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontOriginAccessIdentities(Construct Scope, string Id, DataAwsCloudfrontOriginAccessIdentitiesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig">DataAwsCloudfrontOriginAccessIdentitiesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig">DataAwsCloudfrontOriginAccessIdentitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetComments">ResetComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetComments` <a name="ResetComments" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetComments"></a>

```csharp
private void ResetComments()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsCloudfrontOriginAccessIdentities resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCloudfrontOriginAccessIdentities.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCloudfrontOriginAccessIdentities.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCloudfrontOriginAccessIdentities.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCloudfrontOriginAccessIdentities.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsCloudfrontOriginAccessIdentities resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCloudfrontOriginAccessIdentities to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCloudfrontOriginAccessIdentities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/cloudfront_origin_access_identities#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontOriginAccessIdentities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.iamArns">IamArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.s3CanonicalUserIds">S3CanonicalUserIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.commentsInput">CommentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.comments">Comments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `IamArns`<sup>Required</sup> <a name="IamArns" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.iamArns"></a>

```csharp
public string[] IamArns { get; }
```

- *Type:* string[]

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `S3CanonicalUserIds`<sup>Required</sup> <a name="S3CanonicalUserIds" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.s3CanonicalUserIds"></a>

```csharp
public string[] S3CanonicalUserIds { get; }
```

- *Type:* string[]

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.commentsInput"></a>

```csharp
public string[] CommentsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.comments"></a>

```csharp
public string[] Comments { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentities.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontOriginAccessIdentitiesConfig <a name="DataAwsCloudfrontOriginAccessIdentitiesConfig" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontOriginAccessIdentitiesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Comments = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.comments">Comments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/cloudfront_origin_access_identities#comments DataAwsCloudfrontOriginAccessIdentities#comments}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/cloudfront_origin_access_identities#id DataAwsCloudfrontOriginAccessIdentities#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.comments"></a>

```csharp
public string[] Comments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/cloudfront_origin_access_identities#comments DataAwsCloudfrontOriginAccessIdentities#comments}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontOriginAccessIdentities.DataAwsCloudfrontOriginAccessIdentitiesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/cloudfront_origin_access_identities#id DataAwsCloudfrontOriginAccessIdentities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



