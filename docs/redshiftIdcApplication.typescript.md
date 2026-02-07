# `redshiftIdcApplication` Submodule <a name="`redshiftIdcApplication` Submodule" id="@cdktn/provider-aws.redshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftIdcApplication <a name="RedshiftIdcApplication" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application aws_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplication(scope: Construct, id: string, config: RedshiftIdcApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig">RedshiftIdcApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig">RedshiftIdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer">putAuthorizedTokenIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration">putServiceIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer">resetAuthorizedTokenIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace">resetIdentityNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration">resetServiceIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizedTokenIssuer` <a name="putAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer"></a>

```typescript
public putAuthorizedTokenIssuer(value: IResolvable | RedshiftIdcApplicationAuthorizedTokenIssuer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]

---

##### `putServiceIntegration` <a name="putServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration"></a>

```typescript
public putServiceIntegration(value: IResolvable | RedshiftIdcApplicationServiceIntegration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]

---

##### `resetApplicationType` <a name="resetApplicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType"></a>

```typescript
public resetApplicationType(): void
```

##### `resetAuthorizedTokenIssuer` <a name="resetAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer"></a>

```typescript
public resetAuthorizedTokenIssuer(): void
```

##### `resetIdentityNamespace` <a name="resetIdentityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace"></a>

```typescript
public resetIdentityNamespace(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceIntegration` <a name="resetServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration"></a>

```typescript
public resetServiceIntegration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftIdcApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

redshiftIdcApplication.RedshiftIdcApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RedshiftIdcApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftIdcApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer">authorizedTokenIssuer</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn">idcManagedApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn">redshiftIdcApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration">serviceIntegration</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput">applicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput">authorizedTokenIssuerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput">idcDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput">identityNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput">redshiftIdcApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput">serviceIntegrationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName">idcDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace">identityNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizedTokenIssuer`<sup>Required</sup> <a name="authorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer"></a>

```typescript
public readonly authorizedTokenIssuer: RedshiftIdcApplicationAuthorizedTokenIssuerList;
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a>

---

##### `idcManagedApplicationArn`<sup>Required</sup> <a name="idcManagedApplicationArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```typescript
public readonly idcManagedApplicationArn: string;
```

- *Type:* string

---

##### `redshiftIdcApplicationArn`<sup>Required</sup> <a name="redshiftIdcApplicationArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```typescript
public readonly redshiftIdcApplicationArn: string;
```

- *Type:* string

---

##### `serviceIntegration`<sup>Required</sup> <a name="serviceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration"></a>

```typescript
public readonly serviceIntegration: RedshiftIdcApplicationServiceIntegrationList;
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput"></a>

```typescript
public readonly applicationTypeInput: string;
```

- *Type:* string

---

##### `authorizedTokenIssuerInput`<sup>Optional</sup> <a name="authorizedTokenIssuerInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput"></a>

```typescript
public readonly authorizedTokenIssuerInput: IResolvable | RedshiftIdcApplicationAuthorizedTokenIssuer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `idcDisplayNameInput`<sup>Optional</sup> <a name="idcDisplayNameInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput"></a>

```typescript
public readonly idcDisplayNameInput: string;
```

- *Type:* string

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput"></a>

```typescript
public readonly idcInstanceArnInput: string;
```

- *Type:* string

---

##### `identityNamespaceInput`<sup>Optional</sup> <a name="identityNamespaceInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput"></a>

```typescript
public readonly identityNamespaceInput: string;
```

- *Type:* string

---

##### `redshiftIdcApplicationNameInput`<sup>Optional</sup> <a name="redshiftIdcApplicationNameInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput"></a>

```typescript
public readonly redshiftIdcApplicationNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceIntegrationInput`<sup>Optional</sup> <a name="serviceIntegrationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput"></a>

```typescript
public readonly serviceIntegrationInput: IResolvable | RedshiftIdcApplicationServiceIntegration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName"></a>

```typescript
public readonly idcDisplayName: string;
```

- *Type:* string

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

---

##### `identityNamespace`<sup>Required</sup> <a name="identityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace"></a>

```typescript
public readonly identityNamespace: string;
```

- *Type:* string

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```typescript
public readonly redshiftIdcApplicationName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuer <a name="RedshiftIdcApplicationAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

const redshiftIdcApplicationAuthorizedTokenIssuer: redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList">authorizedAudiencesList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn">trustedTokenIssuerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}. |

---

##### `authorizedAudiencesList`<sup>Optional</sup> <a name="authorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList"></a>

```typescript
public readonly authorizedAudiencesList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}.

---

##### `trustedTokenIssuerArn`<sup>Optional</sup> <a name="trustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn"></a>

```typescript
public readonly trustedTokenIssuerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}.

---

### RedshiftIdcApplicationConfig <a name="RedshiftIdcApplicationConfig" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

const redshiftIdcApplicationConfig: redshiftIdcApplication.RedshiftIdcApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName">idcDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType">applicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer">authorizedTokenIssuer</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]</code> | authorized_token_issuer block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace">identityNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration">serviceIntegration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]</code> | service_integration block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}.

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName"></a>

```typescript
public readonly idcDisplayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}.

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}.

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName"></a>

```typescript
public readonly redshiftIdcApplicationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}.

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}.

---

##### `authorizedTokenIssuer`<sup>Optional</sup> <a name="authorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer"></a>

```typescript
public readonly authorizedTokenIssuer: IResolvable | RedshiftIdcApplicationAuthorizedTokenIssuer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]

authorized_token_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorized_token_issuer RedshiftIdcApplication#authorized_token_issuer}

---

##### `identityNamespace`<sup>Optional</sup> <a name="identityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace"></a>

```typescript
public readonly identityNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#region RedshiftIdcApplication#region}

---

##### `serviceIntegration`<sup>Optional</sup> <a name="serviceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration"></a>

```typescript
public readonly serviceIntegration: IResolvable | RedshiftIdcApplicationServiceIntegration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]

service_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#service_integration RedshiftIdcApplication#service_integration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}.

---

### RedshiftIdcApplicationServiceIntegration <a name="RedshiftIdcApplicationServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

const redshiftIdcApplicationServiceIntegration: redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation">lakeFormation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]</code> | lake_formation block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift">redshift</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]</code> | redshift block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants">s3AccessGrants</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]</code> | s3_access_grants block. |

---

##### `lakeFormation`<sup>Optional</sup> <a name="lakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation"></a>

```typescript
public readonly lakeFormation: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]

lake_formation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#lake_formation RedshiftIdcApplication#lake_formation}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift"></a>

```typescript
public readonly redshift: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshift[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#redshift RedshiftIdcApplication#redshift}

---

##### `s3AccessGrants`<sup>Optional</sup> <a name="s3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants"></a>

```typescript
public readonly s3AccessGrants: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrants[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]

s3_access_grants block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#s3_access_grants RedshiftIdcApplication#s3_access_grants}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormation <a name="RedshiftIdcApplicationServiceIntegrationLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

const redshiftIdcApplicationServiceIntegrationLakeFormation: redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery">lakeFormationQuery</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]</code> | lake_formation_query block. |

---

##### `lakeFormationQuery`<sup>Optional</sup> <a name="lakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery"></a>

```typescript
public readonly lakeFormationQuery: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]

lake_formation_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#lake_formation_query RedshiftIdcApplication#lake_formation_query}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

const redshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery: redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationRedshift <a name="RedshiftIdcApplicationServiceIntegrationRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

const redshiftIdcApplicationServiceIntegrationRedshift: redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect">connect</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]</code> | connect block. |

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect"></a>

```typescript
public readonly connect: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshiftConnect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]

connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#connect RedshiftIdcApplication#connect}

---

### RedshiftIdcApplicationServiceIntegrationRedshiftConnect <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

const redshiftIdcApplicationServiceIntegrationRedshiftConnect: redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrants <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

const redshiftIdcApplicationServiceIntegrationS3AccessGrants: redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess">readWriteAccess</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]</code> | read_write_access block. |

---

##### `readWriteAccess`<sup>Optional</sup> <a name="readWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess"></a>

```typescript
public readonly readWriteAccess: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]

read_write_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#read_write_access RedshiftIdcApplication#read_write_access}

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

const redshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess: redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuerList <a name="RedshiftIdcApplicationAuthorizedTokenIssuerList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get"></a>

```typescript
public get(index: number): RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationAuthorizedTokenIssuer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>[]

---


### RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference <a name="RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList">resetAuthorizedAudiencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn">resetTrustedTokenIssuerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizedAudiencesList` <a name="resetAuthorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList"></a>

```typescript
public resetAuthorizedAudiencesList(): void
```

##### `resetTrustedTokenIssuerArn` <a name="resetTrustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn"></a>

```typescript
public resetTrustedTokenIssuerArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput">authorizedAudiencesListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput">trustedTokenIssuerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList">authorizedAudiencesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn">trustedTokenIssuerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizedAudiencesListInput`<sup>Optional</sup> <a name="authorizedAudiencesListInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput"></a>

```typescript
public readonly authorizedAudiencesListInput: string[];
```

- *Type:* string[]

---

##### `trustedTokenIssuerArnInput`<sup>Optional</sup> <a name="trustedTokenIssuerArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput"></a>

```typescript
public readonly trustedTokenIssuerArnInput: string;
```

- *Type:* string

---

##### `authorizedAudiencesList`<sup>Required</sup> <a name="authorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList"></a>

```typescript
public readonly authorizedAudiencesList: string[];
```

- *Type:* string[]

---

##### `trustedTokenIssuerArn`<sup>Required</sup> <a name="trustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn"></a>

```typescript
public readonly trustedTokenIssuerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationAuthorizedTokenIssuer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get"></a>

```typescript
public get(index: number): RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get"></a>

```typescript
public get(index: number): RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery">putLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery">resetLakeFormationQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLakeFormationQuery` <a name="putLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery"></a>

```typescript
public putLakeFormationQuery(value: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]

---

##### `resetLakeFormationQuery` <a name="resetLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery"></a>

```typescript
public resetLakeFormationQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery">lakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput">lakeFormationQueryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lakeFormationQuery`<sup>Required</sup> <a name="lakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery"></a>

```typescript
public readonly lakeFormationQuery: RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList;
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a>

---

##### `lakeFormationQueryInput`<sup>Optional</sup> <a name="lakeFormationQueryInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput"></a>

```typescript
public readonly lakeFormationQueryInput: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>

---


### RedshiftIdcApplicationServiceIntegrationList <a name="RedshiftIdcApplicationServiceIntegrationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get"></a>

```typescript
public get(index: number): RedshiftIdcApplicationServiceIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>[]

---


### RedshiftIdcApplicationServiceIntegrationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation">putLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift">putRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants">putS3AccessGrants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation">resetLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift">resetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants">resetS3AccessGrants</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLakeFormation` <a name="putLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation"></a>

```typescript
public putLakeFormation(value: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]

---

##### `putRedshift` <a name="putRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift"></a>

```typescript
public putRedshift(value: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshift[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]

---

##### `putS3AccessGrants` <a name="putS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants"></a>

```typescript
public putS3AccessGrants(value: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrants[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]

---

##### `resetLakeFormation` <a name="resetLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation"></a>

```typescript
public resetLakeFormation(): void
```

##### `resetRedshift` <a name="resetRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift"></a>

```typescript
public resetRedshift(): void
```

##### `resetS3AccessGrants` <a name="resetS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants"></a>

```typescript
public resetS3AccessGrants(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation">lakeFormation</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift">redshift</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants">s3AccessGrants</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput">lakeFormationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput">redshiftInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput">s3AccessGrantsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lakeFormation`<sup>Required</sup> <a name="lakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation"></a>

```typescript
public readonly lakeFormation: RedshiftIdcApplicationServiceIntegrationLakeFormationList;
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift"></a>

```typescript
public readonly redshift: RedshiftIdcApplicationServiceIntegrationRedshiftList;
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a>

---

##### `s3AccessGrants`<sup>Required</sup> <a name="s3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants"></a>

```typescript
public readonly s3AccessGrants: RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList;
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a>

---

##### `lakeFormationInput`<sup>Optional</sup> <a name="lakeFormationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput"></a>

```typescript
public readonly lakeFormationInput: IResolvable | RedshiftIdcApplicationServiceIntegrationLakeFormation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>[]

---

##### `redshiftInput`<sup>Optional</sup> <a name="redshiftInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput"></a>

```typescript
public readonly redshiftInput: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshift[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]

---

##### `s3AccessGrantsInput`<sup>Optional</sup> <a name="s3AccessGrantsInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput"></a>

```typescript
public readonly s3AccessGrantsInput: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrants[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get"></a>

```typescript
public get(index: number): RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshiftConnect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshiftConnect;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get"></a>

```typescript
public get(index: number): RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshift[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>[]

---


### RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect">putConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect">resetConnect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnect` <a name="putConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect"></a>

```typescript
public putConnect(value: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshiftConnect[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]

---

##### `resetConnect` <a name="resetConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect"></a>

```typescript
public resetConnect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect">connect</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput">connectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect"></a>

```typescript
public readonly connect: RedshiftIdcApplicationServiceIntegrationRedshiftConnectList;
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a>

---

##### `connectInput`<sup>Optional</sup> <a name="connectInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput"></a>

```typescript
public readonly connectInput: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshiftConnect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationRedshift;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get"></a>

```typescript
public get(index: number): RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrants[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>[]

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess">putReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess">resetReadWriteAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReadWriteAccess` <a name="putReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess"></a>

```typescript
public putReadWriteAccess(value: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]

---

##### `resetReadWriteAccess` <a name="resetReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess"></a>

```typescript
public resetReadWriteAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess">readWriteAccess</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput">readWriteAccessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readWriteAccess`<sup>Required</sup> <a name="readWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```typescript
public readonly readWriteAccess: RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList;
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a>

---

##### `readWriteAccessInput`<sup>Optional</sup> <a name="readWriteAccessInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput"></a>

```typescript
public readonly readWriteAccessInput: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrants;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get"></a>

```typescript
public get(index: number): RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>[]

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```typescript
import { redshiftIdcApplication } from '@cdktn/provider-aws'

new redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>

---



