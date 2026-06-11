# `cognitoUserPoolDomain` Submodule <a name="`cognitoUserPoolDomain` Submodule" id="@cdktn/provider-aws.cognitoUserPoolDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolDomain <a name="CognitoUserPoolDomain" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain aws_cognito_user_pool_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CognitoUserPoolDomain(Construct Scope, string Id, CognitoUserPoolDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig">CognitoUserPoolDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig">CognitoUserPoolDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion">ResetManagedLoginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedLoginVersion` <a name="ResetManagedLoginVersion" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion"></a>

```csharp
private void ResetManagedLoginVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUserPoolDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CognitoUserPoolDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CognitoUserPoolDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CognitoUserPoolDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CognitoUserPoolDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoUserPoolDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution">CloudfrontDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistributionArn">CloudfrontDistributionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistributionZoneId">CloudfrontDistributionZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput">ManagedLoginVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion">ManagedLoginVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `CloudfrontDistribution`<sup>Required</sup> <a name="CloudfrontDistribution" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution"></a>

```csharp
public string CloudfrontDistribution { get; }
```

- *Type:* string

---

##### `CloudfrontDistributionArn`<sup>Required</sup> <a name="CloudfrontDistributionArn" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistributionArn"></a>

```csharp
public string CloudfrontDistributionArn { get; }
```

- *Type:* string

---

##### `CloudfrontDistributionZoneId`<sup>Required</sup> <a name="CloudfrontDistributionZoneId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistributionZoneId"></a>

```csharp
public string CloudfrontDistributionZoneId { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedLoginVersionInput`<sup>Optional</sup> <a name="ManagedLoginVersionInput" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput"></a>

```csharp
public double ManagedLoginVersionInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedLoginVersion`<sup>Required</sup> <a name="ManagedLoginVersion" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion"></a>

```csharp
public double ManagedLoginVersion { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolDomainConfig <a name="CognitoUserPoolDomainConfig" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CognitoUserPoolDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Domain,
    string UserPoolId,
    string CertificateArn = null,
    string Id = null,
    double ManagedLoginVersion = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#id CognitoUserPoolDomain#id}. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion">ManagedLoginVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}. |
| <code><a href="#@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#id CognitoUserPoolDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedLoginVersion`<sup>Optional</sup> <a name="ManagedLoginVersion" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion"></a>

```csharp
public double ManagedLoginVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/cognito_user_pool_domain#region CognitoUserPoolDomain#region}

---



