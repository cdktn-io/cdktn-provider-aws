# `cloudfrontTrustStore` Submodule <a name="`cloudfrontTrustStore` Submodule" id="@cdktn/provider-aws.cloudfrontTrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontTrustStore <a name="CloudfrontTrustStore" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store aws_cloudfront_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStore(Construct Scope, string Id, CloudfrontTrustStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig">CloudfrontTrustStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig">CloudfrontTrustStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putCaCertificatesBundleSource">PutCaCertificatesBundleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetCaCertificatesBundleSource">ResetCaCertificatesBundleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCaCertificatesBundleSource` <a name="PutCaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putCaCertificatesBundleSource"></a>

```csharp
private void PutCaCertificatesBundleSource(IResolvable|CloudfrontTrustStoreCaCertificatesBundleSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putCaCertificatesBundleSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudfrontTrustStoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a>

---

##### `ResetCaCertificatesBundleSource` <a name="ResetCaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetCaCertificatesBundleSource"></a>

```csharp
private void ResetCaCertificatesBundleSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontTrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudfrontTrustStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudfrontTrustStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudfrontTrustStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudfrontTrustStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudfrontTrustStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontTrustStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontTrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontTrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSource">CaCertificatesBundleSource</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList">CloudfrontTrustStoreCaCertificatesBundleSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.numberOfCaCertificates">NumberOfCaCertificates</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference">CloudfrontTrustStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSourceInput">CaCertificatesBundleSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CaCertificatesBundleSource`<sup>Required</sup> <a name="CaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSource"></a>

```csharp
public CloudfrontTrustStoreCaCertificatesBundleSourceList CaCertificatesBundleSource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList">CloudfrontTrustStoreCaCertificatesBundleSourceList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NumberOfCaCertificates`<sup>Required</sup> <a name="NumberOfCaCertificates" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.numberOfCaCertificates"></a>

```csharp
public double NumberOfCaCertificates { get; }
```

- *Type:* double

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.timeouts"></a>

```csharp
public CloudfrontTrustStoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference">CloudfrontTrustStoreTimeoutsOutputReference</a>

---

##### `CaCertificatesBundleSourceInput`<sup>Optional</sup> <a name="CaCertificatesBundleSourceInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.caCertificatesBundleSourceInput"></a>

```csharp
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSource[] CaCertificatesBundleSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.timeoutsInput"></a>

```csharp
public IResolvable|CloudfrontTrustStoreTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontTrustStoreCaCertificatesBundleSource <a name="CloudfrontTrustStoreCaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStoreCaCertificatesBundleSource {
    IResolvable|CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location[] CaCertificatesBundleS3Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource.property.caCertificatesBundleS3Location">CaCertificatesBundleS3Location</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>[]</code> | ca_certificates_bundle_s3_location block. |

---

##### `CaCertificatesBundleS3Location`<sup>Optional</sup> <a name="CaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource.property.caCertificatesBundleS3Location"></a>

```csharp
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location[] CaCertificatesBundleS3Location { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>[]

ca_certificates_bundle_s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#ca_certificates_bundle_s3_location CloudfrontTrustStore#ca_certificates_bundle_s3_location}

---

### CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location <a name="CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location {
    string Bucket,
    string Key,
    string Region,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#bucket CloudfrontTrustStore#bucket}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#key CloudfrontTrustStore#key}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#region CloudfrontTrustStore#region}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#version CloudfrontTrustStore#version}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#bucket CloudfrontTrustStore#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#key CloudfrontTrustStore#key}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#region CloudfrontTrustStore#region}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#version CloudfrontTrustStore#version}.

---

### CloudfrontTrustStoreConfig <a name="CloudfrontTrustStoreConfig" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|CloudfrontTrustStoreCaCertificatesBundleSource[] CaCertificatesBundleSource = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    CloudfrontTrustStoreTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#name CloudfrontTrustStore#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.caCertificatesBundleSource">CaCertificatesBundleSource</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>[]</code> | ca_certificates_bundle_source block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#tags CloudfrontTrustStore#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#name CloudfrontTrustStore#name}.

---

##### `CaCertificatesBundleSource`<sup>Optional</sup> <a name="CaCertificatesBundleSource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.caCertificatesBundleSource"></a>

```csharp
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSource[] CaCertificatesBundleSource { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>[]

ca_certificates_bundle_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#ca_certificates_bundle_source CloudfrontTrustStore#ca_certificates_bundle_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#tags CloudfrontTrustStore#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreConfig.property.timeouts"></a>

```csharp
public CloudfrontTrustStoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#timeouts CloudfrontTrustStore#timeouts}

---

### CloudfrontTrustStoreTimeouts <a name="CloudfrontTrustStoreTimeouts" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStoreTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#create CloudfrontTrustStore#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#delete CloudfrontTrustStore#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/cloudfront_trust_store#update CloudfrontTrustStore#update}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList <a name="CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.get"></a>

```csharp
private CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>[]

---


### CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference <a name="CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>

---


### CloudfrontTrustStoreCaCertificatesBundleSourceList <a name="CloudfrontTrustStoreCaCertificatesBundleSourceList" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStoreCaCertificatesBundleSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.get"></a>

```csharp
private CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceList.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>[]

---


### CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference <a name="CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.putCaCertificatesBundleS3Location">PutCaCertificatesBundleS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resetCaCertificatesBundleS3Location">ResetCaCertificatesBundleS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaCertificatesBundleS3Location` <a name="PutCaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.putCaCertificatesBundleS3Location"></a>

```csharp
private void PutCaCertificatesBundleS3Location(IResolvable|CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.putCaCertificatesBundleS3Location.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>[]

---

##### `ResetCaCertificatesBundleS3Location` <a name="ResetCaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.resetCaCertificatesBundleS3Location"></a>

```csharp
private void ResetCaCertificatesBundleS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3Location">CaCertificatesBundleS3Location</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3LocationInput">CaCertificatesBundleS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCertificatesBundleS3Location`<sup>Required</sup> <a name="CaCertificatesBundleS3Location" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3Location"></a>

```csharp
public CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList CaCertificatesBundleS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3LocationList</a>

---

##### `CaCertificatesBundleS3LocationInput`<sup>Optional</sup> <a name="CaCertificatesBundleS3LocationInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.caCertificatesBundleS3LocationInput"></a>

```csharp
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location[] CaCertificatesBundleS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location">CloudfrontTrustStoreCaCertificatesBundleSourceCaCertificatesBundleS3Location</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontTrustStoreCaCertificatesBundleSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreCaCertificatesBundleSource">CloudfrontTrustStoreCaCertificatesBundleSource</a>

---


### CloudfrontTrustStoreTimeoutsOutputReference <a name="CloudfrontTrustStoreTimeoutsOutputReference" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudfrontTrustStoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontTrustStoreTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontTrustStore.CloudfrontTrustStoreTimeouts">CloudfrontTrustStoreTimeouts</a>

---



